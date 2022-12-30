import Model, { attr } from '@ember-data/model';
import PlateModel from './plate';

export default class ResultModel extends Model {
    @attr()
    weightPerSide!: number;

    @attr()
    adjustedWeight!: number;

    @attr()
    totalWeight!: number;

    @attr()
    plateSetToUse!: Array<PlateModel>;

    @attr()
    platesNeeded!: Array<PlateModel>;
}
