const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('build/')
  .setPublicPath('/css4/build')
  .setManifestKeyPrefix('build')
  .addEntry('app', './js/app.js')
  .enableSingleRuntimeChunk()
  .enableSourceMaps(!Encore.isProduction())
  .enableSassLoader()
;

if (Encore.isProduction()) {
  Encore
    .cleanupOutputBeforeBuild()
    .enableVersioning()
  ;
}

module.exports = Encore.getWebpackConfig();
