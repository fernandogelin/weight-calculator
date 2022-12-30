import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type WeightsService from 'weight-calc/services/weights';

export default class ResultsRoute extends Route {
    @service declare weights: WeightsService;
    @service declare router: Route;

    beforeModel() {
        if (!this.weights.weight) {
            this.router.transitionTo('index');
        }
    }
}
