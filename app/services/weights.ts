import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import type BarModel from 'weight-calc/models/bar';
import type PlateModel from 'weight-calc/models/plate';
import {
    adjustWeight,
    calculatePlatesNeeded,
} from 'weight-calc/utils/calculatePlatesNeeded';

export default class WeightsService extends Service {
    @tracked weight!: string;

    @tracked selectedBar: BarModel | undefined;

    @tracked plateSet!: Array<PlateModel>;

    @tracked legPressPlateSet!: Array<PlateModel>;

    get weightPerSide(): number {
        return (
            (parseInt(this.weight) - this.selectedBar!.weight) /
                this.denominator || 0
        );
    }

    get adjustedWeight(): number {
        return adjustWeight(this.weightPerSide);
    }

    get totalWeight(): number {
        return (
            this.adjustedWeight * this.denominator + this.selectedBar!.weight ||
            0
        );
    }

    get isNoWeightBar(): boolean {
        return this.selectedBar?.id === 'no-weight';
    }

    get isLegPress(): boolean {
        return this.selectedBar?.id === 'leg-press';
    }

    get isBarHeavier(): boolean {
        return this.selectedBar
            ? this.selectedBar!.weight > parseFloat(this.weight)
            : true;
    }

    get isCalculationDisabled(): boolean {
        return !this.weight || this.isBarHeavier || this.weight === '0';
    }

    get denominator(): number {
        return this.selectedBar!.id === 'no-weight' ? 1 : 2;
    }

    get plateSetToUse(): Array<PlateModel> {
        return this.isLegPress ? this.legPressPlateSet : this.plateSet;
    }

    get platesNeeded(): Array<PlateModel> {
        return calculatePlatesNeeded(this.adjustedWeight, this.plateSetToUse);
    }
}
