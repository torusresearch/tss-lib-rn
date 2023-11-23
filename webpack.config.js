exports.baseConfig = {
    entry: "./src/node.js",
    target: 'node',
    node: {
    __dirname: false,
    __filename: false,
    }
};