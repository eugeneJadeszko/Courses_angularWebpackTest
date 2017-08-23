var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
 
module.exports = {
  entry: {//входные файлы для сборки
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/app/main.ts'
  },
    output: {//выходные файлы записывать в папку dist файлы формировать как имя исходного.хэш
        path: path.resolve('dist'),
        publicPath: '/webpack/',
        filename: '[name].[hash].js'
      },
  resolve: {//если нет расширений то файлы будут обрабатываться как TypeScript или JavaScript файл
    extensions: ['.ts', '.js']
  },
 
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [{
          loader: 'awesome-typescript-loader',
          options: { configFileName: path.resolve('tsconfig.json') }
        } , 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file-loader?name=assets/[name].[hash].[ext]'
    },
    {
      test: /\.css$/,
      exclude: path.resolve('src', 'app'),
      loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
    },
    {
      test: /\.css$/,
      include: path.resolve('src', 'app'),
      loader: 'raw-loader'
    }]
  },
 
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve('./src'), // каталог с исходными файлами
      {} // карта маршрутов
    ),
 
	/** удаляет все повторяющиеся куски кода, organize import */
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
	
	/** автоматически внедряет javaScript или css в index.html */
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('[name].[hash].css'),//удаляет скомпилированный CSS из bundle и делает отдельным файлом
    new webpack.NoEmitOnErrorsPlugin(),//останавливает сборку если ошибка
     
    new webpack.optimize.UglifyJsPlugin({ //уменьшает размер кода убирает пробелы комментарии и т.д.
      mangle: {
        keep_fnames: true
      }
    }),
     
    new webpack.LoaderOptionsPlugin({//позволяет переопределить поведение других модулей
      htmlLoader: {
        minimize: false
      }
    })
  ]
};