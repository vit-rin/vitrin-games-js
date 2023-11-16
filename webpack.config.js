const path = require("path");

module.exports = {
    entry: {
        "vitrin-games": "./src/vitrin-games.ts",
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
        library: "VitRin Games JavaScript SDK",
        libraryTarget: "umd",
        globalObject: "this",
    },
    mode: "production",
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
        ],
    },
};
