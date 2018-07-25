var mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// ReactJS
mix.react('js/magento-mix/app', 'js/magento-mix/public');

// VueJS
// mix.js('resources/vue/js/app.js', 'public/vue/js')
//     .sass('resources/vue/sass/app.scss', 'public/vue/css');

