const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        clean: true,
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        library: {
            name: 'vue-components-hwl',
            type: 'umd'
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash:8][ext][query]'
                }
            }
        ]
    },
    mode: 'development'
}