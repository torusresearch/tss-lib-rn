exports.baseConfig = {
    entry: "./src/node.js",
    target: 'node',
    node: {
    __dirname: false,
    __filename: false,
    },
    module: {
        rules: [
            {
                test: /\.wasm$/,
                type: "asset/inline"
            }
        ]
    },
    experiments :{
        asyncWebAssembly: true
    }
};