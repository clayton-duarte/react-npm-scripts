const autoprefixer = require('autoprefixer');
const dirname = process.argv[3].split('/');
dirname.splice(-3, 3);
const _path = dirname.join('/');

module.exports = {
    entry: _path + '/index.js',
    target: 'node',
    output: {
        path: _path + '/pack',
        filename: 'module.js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{ 
                loader: 'babel-loader',
                options: {
                    presets: [
                        'react',
                    ]
                }
            }],
        },{
            test: /\.(sass|scss|css)$/,
            use: [{ 
                loader: 'style-loader'
            },{
                loader: 'css-loader'
            },{
                loader: 'sass-loader'
            },{
                loader: 'postcss-loader',
                options: {
                    indent: 'postcss',
                    plugins: () => {
                        autoprefixer({
                            browsers: [
                                '>1%',
                                'last 4 versions',
                                'Firefox ESR',
                                'not ie < 9',
                            ]
                        })
                    }
                }
            }],
        }]
    }
}