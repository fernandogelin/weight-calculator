import type PlateModel from 'weight-calc/models/plate';

function adjustWeight(weight: number): number {
    return 1.25 * Math.ceil(weight / 1.25);
}

function calculatePlatesNeeded(
    adjustedWeight: number,
    plateSet: Array<PlateModel>
): Array<PlateModel> {
    let plateArray: Array<PlateModel> = [];

    while (adjustedWeight > 0) {
        const plate = plateSet
            .slice()
            .sort((a, b) => b.weight - a.weight)
            .find((p: PlateModel) => adjustedWeight >= p.weight);
        if (plate) {
            plateArray.push(plate);
            adjustedWeight -= plate.weight;
        }
    }
    return plateArray;
}

export { adjustWeight, calculatePlatesNeeded };
