const eslintFormatter = require('react-dev-utils/eslintFormatter');
const autoprefixer = require('autoprefixer');
const dirname = process.argv[3].split('/');
dirname.splice(-1, 1);
let _pathScripts = dirname.join('/');
dirname.splice(-2, 2);
const _pathRoot = dirname.join('/');

module.exports = {
    entry: _pathRoot + '/index.js',
    target: 'node',
    output: {
        path: _pathRoot + '/pack',
        filename: 'module.js',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            enforce: 'pre',
            exclude: /node_modules/,
            use: [{
                loader: require.resolve('eslint-loader'),
                options: {
                    configFile: _pathScripts + '/.eslintrc',
                    formatter: eslintFormatter,
                    eslintPath: require.resolve('eslint'),
                    fix: true
                }
              }]
        },{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        "react",
                        "env"
                    ]
                }
            }]
        },{
            test: /\.(sass|scss|css)$/,
            use: [
                'style-loader',
                'css-loader',
            {
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
            },
                'sass-loader'
            ],
        }]
    }
}