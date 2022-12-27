'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');

module.exports = function (defaults) {
    let app = new EmberApp(defaults, {
        // Add options here
        postcssOptions: {
            compile: {
                plugins: [require('tailwindcss')('./tailwind.config.js')],
            },
        },
        'ember-heroicons': {
            // default type to use if not specified to the HeroIcon component
            defaultType: 'outline',
            // include only certain matching icons (array of string or RegExp)
            include: [/.*/],
            // include only certain types (outline, solid, mini)
            types: ['outline'],
        },
        'ember-cli-image-transformer': {
            images: [
                {
                    inputFilename: 'public/icons/barbell.svg',
                    outputFileName: 'appicon-',
                    convertTo: 'png',
                    background: { r: 29, g: 78, b: 216, alpha: 0 },
                    destination: 'icons/',
                    sizes: [64, 192, 512],
                },
            ],
        },
    });

    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.

    return require('@embroider/compat').compatBuild(app, Webpack, {
        packagerOptions: {
            webpackConfig: {
                devtool: 'source-map',
            },
        },
    });
};
