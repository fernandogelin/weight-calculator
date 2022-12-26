import Model, { attr } from '@ember-data/model';

export default class BarModel extends Model {
    @attr()
    declare name: string;

    @attr()
    declare weight: number;

    @attr()
    declare unit: 'lb' | 'kg';
}
