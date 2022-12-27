'use strict';

module.exports = function (/* environment, appConfig */) {
    // See https://zonkyio.github.io/ember-web-app for a list of
    // supported properties

    return {
        name: 'weight-calc',
        short_name: 'weight-calc',
        description: '',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#1D4ED8',
        theme_color: '#1D4ED8',
        icons: [],
        ms: {
            tileColor: '#1D4ED8',
        },
    };
};
