const { mix } = require('laravel-mix');
const path = require("path")

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

mix.js('src/js/app.js', 'public/dist/js')
    .sass('src/scss/app.scss', 'public/dist/css');

// mix.webpackConfig({
//     devServer: {
//         contentBase: path.join(__dirname, "public"),
//         publicPath: "/dist/js/",
//         port: 3000,
//         open: true,
//     },
// });

//https://browsersync.io/docs/options
mix.browserSync({
    open:"external",
    proxy:false,
    server:{
        baseDir: "public",
        index: "index.html",
    },
    files:[
        "./public/**/*"
    ]
});
