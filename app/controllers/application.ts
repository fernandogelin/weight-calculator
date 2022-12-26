import { A } from '@ember/array';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import BarModel from 'weight-calc/models/bar';
import PlateModel from 'weight-calc/models/plate';
import { ApplicationModel } from 'weight-calc/routes/application';

export default class ApplicationController extends Controller {
    declare model: ApplicationModel;

    @tracked
    weight!: string;

    @tracked
    platesNeeded!: Array<PlateModel>;

    @tracked
    plateSet: Array<PlateModel> = this.model.plates.slice();

    @tracked selectedBar = this.model?.bars.find(
        (bar: BarModel) => bar.id === 'barbell-sm'
    );

    get weightPerSide(): number {
        return (parseInt(this.weight) - this.selectedBar!.weight) / 2 || 0;
    }

    get plateArraySum() {
        return this.platesNeeded?.reduce((acc, obj) => acc + obj.weight, 0);
    }

    @action calculatePlatesNeeded() {
        let plateArray: Array<PlateModel> = [];
        let weightNeeded = this.weightPerSide;

        while (weightNeeded > 0) {
            const plate = this.plateSet
                .slice()
                .sort((a, b) => b.weight - a.weight)
                .find((p: PlateModel) => weightNeeded >= p.weight);
            console.log(weightNeeded, plate?.weight);
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

    @action updatePlateSet(plate: PlateModel): void {
        console.log(plate);
    }
}
