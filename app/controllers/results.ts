import Controller from '@ember/controller';
import { service } from '@ember/service';
import type WeightsService from 'weight-calc/services/weights';

export default class ResultsController extends Controller {
    @service declare weights: WeightsService;
}
