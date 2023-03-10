'use strict';

module.exports = function (/* environment, appConfig */) {
    // See https://zonkyio.github.io/ember-web-app for a list of
    // supported properties

    return {
        name: 'WeightCalc',
        short_name: 'WeightCalc',
        description: '',
        start_url: 'https://plates.gelin.one',
        scope: '/',
        display: 'standalone',
        icons: [
            {
                src: '/icons/barbell.svg',
                sizes: 'any',
            },
            {
                src: '/icons/appicon-64.png',
                sizes: '64x64',
                targets: ['favicon'],
            },
            {
                src: '/icons/appicon-512.png',
                sizes: '512x512',
                purpose: 'maskable',
            },
        ],
    };
};
