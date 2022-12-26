import Model, { attr } from '@ember-data/model';

export default class PlateModel extends Model {
    @attr()
    declare name: string;

    @attr()
    declare weight: number;

    @attr()
    declare unit: 'lb' | 'kg';

    @attr()
    declare color: string;

    get colors() {
        return {
            stroke: `stroke-${this.color}-600 dark:stroke-${this.color}-400`,
            background: `bg-${this.color}-600 dark:bg-${this.color}-400`,
            fill: `fill-${this.color}-500 dark:fill-${this.color}-300`,
        };
    }

    get width() {
        return this.weight >= 10 ? 'w-24' : 'w-20';
    }

    // stroke-stone-600 dark:stroke-stone-400
    // stroke-slate-600 dark:stroke-slate-400
    // stroke-yellow-600 dark:stroke-yellow-400
    // stroke-green-600 dark:stroke-green-400
    // stroke-blue-600 dark:stroke-blue-400
    // stroke-red-600 dark:stroke-red-400
    // bg-stone-600 dark:bg-stone-400
    // bg-slate-600 dark:bg-slate-400
    // bg-yellow-600 dark:bg-yellow-400
    // bg-green-600 dark:bg-green-400
    // bg-blue-600 dark:bg-blue-400
    // bg-red-600 dark:bg-red-400
    // fill-stone-500 dark:fill-stone-300
    // fill-slate-500 dark:fill-slate-300
    // fill-yellow-500 dark:fill-yellow-300
    // fill-green-500 dark:fill-green-300
    // fill-blue-500 dark:fill-blue-300
    // fill-red-500 dark:fill-red-300
}
