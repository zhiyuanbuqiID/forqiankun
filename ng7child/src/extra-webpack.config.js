const webpackMerge = require('webpack-merge');
const packageName = import('../package.json').name;
module.exports = (config, options) => {
  const qiankunSpaConfig = {
    output: {
      // library: 'ng7chunk',
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
    externals: {
      'zone.js': 'Zone',
    },
  };
  const mergedConfig = webpackMerge.smart(config, qiankunSpaConfig);
  return mergedConfig;
};


// const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
// const webpackMerge = require('webpack-merge');
// const { name } = require('./package');

// module.exports = (angularWebpackConfig, options) => {
//   const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);

//   const singleSpaConfig = {
//     output: {
//       library: `${name}-[name]`,
//       libraryTarget: 'umd',
//     },
//     externals: {
//       'zone.js': 'Zone',
//     },
//   };
//   const mergedConfig = webpackMerge.smart(singleSpaWebpackConfig, singleSpaConfig);
//   return mergedConfig;
// };
