const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');

module.exports = env => ({
    context: path.resolve(__dirname, './src/' + env.testFolder),
    entry: './' + env.testFolder + '.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
    },
    mode: 'development',
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        port: 9000,
        open: true,
    },
    module: {
        rules: [
            {
              test: /\.html$/i,
              loader: "html-loader",
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    compilerOptions: {
                        declaration: true,
                        exclude: ['node_modules'],
                    },
                },
            },
        ],
    },
    plugins: [
        new CopyPlugin({
          patterns: env.customCopy1 && env.customCopy2 ? [
            { from: "./" + env.customCopy1 + ".wasm", to: "" },
            { from: "./" + env.customCopy2 + ".wasm", to: "" }
          ] :
          env.customCopy1 ? [
            { from: "./" + env.customCopy1 + ".wasm", to: "" }
          ] : [
            { from: "./" + env.testFolder + ".wasm", to: "" }
          ]
        }),
      ],
  });