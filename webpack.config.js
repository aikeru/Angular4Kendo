/**
 *
 * Created by aikeru on 11/8/2015.
 */

var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
    debug: true,
    //cache: true,
    verbose: true,
    displayErrorDetails: true,
    context: __dirname,
    stats: {
        colors: true,
        reasons: true
    },

    entry: {
        'angular': [
            '@reactivex/rxjs',
            'zone.js',
            'reflect-metadata',
            '@angular/core',
            '@angular/common',
            '@angular/http',
            '@angular/router'
        ],
        'app': [
            './src/app.es6'
        ]

        /*,
        'app': [

        ]*/

    },
    resolve: {
        root: __dirname,
        //extensions: ['', '.js', '.es6', '.json'],
        extensions: ['', '.js', '.json'],
        alias: {
            'rx': '@reactivex/rxjs'
        }
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            { test: /\.css$/, loader: 'raw' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.es6$/, loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    "optional": ["es7.decorators"]
                }
                //query: {
                //    presets: ['es2015', 'stage-1']
                //}
            }
            //{ test: /\.es6/, loader: }
        ]
    },
    noParse: [
        /rtts_assert\/src\/rtts_assert/,
        /reflect-metadata/
    ],

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'VERSION': '0.0.1'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'angular',
            minChunks: Infinity,
            filename: 'angular.js'
        })/*,
        new webpack.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js'
        })*/
    ],

    //node: {
    //    crypto: false,
    //    __filename: true
    //},

    output: {
        path: './public/javascripts',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    }
};
