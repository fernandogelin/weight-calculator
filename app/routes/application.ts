import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Store from '@ember-data/store';
import RSVP from 'rsvp';
import type BarModel from 'weight-calc/models/bar';
import type PlateModel from 'weight-calc/models/plate';
import ArrayProxy from '@ember/array/proxy';

export interface ApplicationModel {
    bars: ArrayProxy<BarModel>;
    plates: ArrayProxy<PlateModel>;
}

export default class ApplicationRoute extends Route {
    @service declare store: Store;

    async model(): Promise<ApplicationModel> {
        const bars = this.store.findAll('bar');
        const plates = this.store.findAll('plate');

        return RSVP.hash({
            bars,
            plates,
        });
    }
}
