const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    library: 'MyTaroComponents',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
};
