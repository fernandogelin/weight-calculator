import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import type BarModel from 'weight-calc/models/bar';
import type PlateModel from 'weight-calc/models/plate';
import { ApplicationModel } from 'weight-calc/routes/application';
import { service } from '@ember/service';
import type WeightsService from 'weight-calc/services/weights';

export default class IndexController extends Controller {
    declare model: ApplicationModel;

    @service declare weights: WeightsService;

    @tracked
    platesNeeded!: Array<PlateModel>;

    @tracked isSettingsOpen: boolean = true;

    @tracked isResultsOpen: boolean = false;

    @action initSettings() {
        this.weights.selectedBar = this.model.bars.find(
            (bar: BarModel) => bar.id === 'no-weight'
        );

        this.weights.plateSet = this.model.plates.slice();

        this.weights.legPressPlateSet = this.model.plates
            .slice()
            .filter(
                (plate: PlateModel) => ![55, 35, 15].includes(plate.weight)
            );
    }

    @action handleBarChange(value: BarModel): void {
        this.weights.selectedBar = value;
    }
}
