var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Webpack Config
var webpackConfig = {
    entry: {
        'main': './src/main/resources/META-INF/resources/main.browser.ts',
    },

    output: {
        publicPath: '',
        path: path.resolve(__dirname, './build/resources/main/META-INF/resources/')
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
            path.resolve(__dirname, './src'),
            {
                // your Angular Async Route paths relative to this root directory
            }
        ),
        new ExtractTextPlugin('[name].css'),
    ],

    module: {
        rules: [
            // .ts files for TypeScript
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular2-router-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]',

            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, './src'),
                loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap'})
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, './src'),
                loader: 'raw-loader'
            },
            {test: /\.html$/, loader: 'raw-loader'}
        ],
        exprContextCritical: false
    }

};

// Our Webpack Defaults
var defaultConfig = {
    devtool: 'source-map',

    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(__dirname, 'node_modules')]
    },


    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }
};


module.exports = webpackMerge(defaultConfig, webpackConfig);
