import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import type BarModel from 'weight-calc/models/bar';
import type PlateModel from 'weight-calc/models/plate';
import { ApplicationModel } from 'weight-calc/routes/application';

export default class ApplicationController extends Controller {
    declare model: ApplicationModel;

    @tracked
    weight!: string;

    @tracked
    adjustedWeight!: number;

    @tracked
    platesNeeded!: Array<PlateModel>;

    @tracked selectedBar: BarModel | undefined = this.model?.bars.find(
        (bar: BarModel) => bar.id === 'no-weight'
    );

    @tracked plateSet: Array<PlateModel> = this.model.plates.slice();

    @tracked legPressPlateSet: Array<PlateModel> = this.model.plates
        .slice()
        .filter((plate: PlateModel) => ![55, 35, 15].includes(plate.weight));

    get isNoWeightBar(): boolean {
        return this.selectedBar?.id === 'no-weight';
    }

    get isLegPress(): boolean {
        return this.selectedBar?.id === 'leg-press';
    }

    get denominator(): number {
        return this.selectedBar!.id === 'no-weight' ? 1 : 2;
    }

    get weightPerSide(): number {
        return (
            (parseInt(this.weight) - this.selectedBar!.weight) /
                this.denominator || 0
        );
    }

    get totalWeight(): number {
        return (
            this.adjustedWeight * this.denominator + this.selectedBar!.weight ||
            0
        );
    }

    get plateArraySum() {
        return this.platesNeeded?.reduce((acc, obj) => acc + obj.weight, 0);
    }

    get isBarHeavier(): boolean {
        return this.selectedBar!.weight > parseFloat(this.weight);
    }

    @action calculatePlatesNeeded() {
        let plateArray: Array<PlateModel> = [];
        let weightNeeded = 1.25 * Math.ceil(this.weightPerSide / 1.25);
        this.set('adjustedWeight', weightNeeded);

        const plateSet = this.isLegPress
            ? this.legPressPlateSet
            : this.plateSet;

        while (weightNeeded > 0) {
            const plate = plateSet
                .slice()
                .sort((a, b) => b.weight - a.weight)
                .find((p: PlateModel) => weightNeeded >= p.weight);
            if (plate) {
                plateArray.push(plate);
                weightNeeded -= plate.weight;
            }
        }
        this.platesNeeded = plateArray;
    }

    @action handleBarChange(value: BarModel): void {
        this.selectedBar = value;
    }
}
