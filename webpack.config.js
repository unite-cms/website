var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    .addEntry('js/app', './assets/ts/app.ts')
    .addStyleEntry('css/critical', './assets/scss/critical.scss')
    .addStyleEntry('css/app', './assets/scss/app.scss')

    .enableSassLoader()
    .enableTypeScriptLoader()

;

module.exports = Encore.getWebpackConfig();
