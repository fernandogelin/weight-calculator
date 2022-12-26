/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/components/*.hbs',
        './app/templates/*.hbs',
        './app/index.html',
        './app/models/*.ts',
    ],
    darkMode: 'media',
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
