let mix = require('laravel-mix');

mix.postCss("src/style.css", "public/dist", [
 require("tailwindcss"),
]);

mix.browserSync('localhost:5500');