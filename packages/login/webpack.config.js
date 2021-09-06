const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
    entry: {
        "build/bundle": ["./src/main.js"],
    },
    resolve: {
        alias: {
            svelte: path.dirname(require.resolve("svelte/package.json")),
        },
        extensions: [".mjs", ".js", ".svelte"],
        mainFields: ["svelte", "browser", "module", "main"],
    },
    output: {
        path: path.join(__dirname, "/public"),
        filename: "[name].js",
        chunkFilename: "[name].[id].js",
        publicPath: "http://localhost:3001/",
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: "svelte-loader",
                    options: {
                        compilerOptions: {
                            dev: !prod,
                        },
                        emitCss: prod,
                        hotReload: !prod,
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [require("tailwindcss"), require("autoprefixer")],
                            },
                        },
                    },
                ],
            },
            {
                // required to prevent errors from Svelte on Webpack 5+
                test: /node_modules\/svelte\/.*\.mjs$/,
                resolve: {
                    fullySpecified: false,
                },
            },
        ],
    },
    mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new ModuleFederationPlugin({
            name: "login",
            filename: "remoteEntry.js",
            remotes: {},
            exposes: {
                "./Login": "./src/main",
            },
            shared: [],
        }),
    ],
    devtool: prod ? false : "source-map",
    devServer: {
        hot: true,
        port: 3001,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
        },
    },
};
