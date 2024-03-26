// webpack.config.js

const path = require("path");

module.exports = {
    entry: "./src/VitGames.ts",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "vitgames.browser.js",
        library: "VitGames JavaScript SDK",
        libraryTarget: "umd",
        globalObject: "this",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.scss$/i,
                include: path.resolve(__dirname, "src"),
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
};
