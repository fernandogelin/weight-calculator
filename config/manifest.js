'use strict';

module.exports = function (/* environment, appConfig */) {
    // See https://zonkyio.github.io/ember-web-app for a list of
    // supported properties

    return {
        name: 'WightCalc',
        short_name: 'WightCalc',
        description: '',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#1D4ED8',
        theme_color: '#1D4ED8',
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
            ...[192, 512].map((size) => ({
                src: `/icons/appicon-${size}.png`,
                sizes: `${size}x${size}`,
            })),
        ],
    };
};
