// Webpack configuration file for a simple web application (bundle the project)
// This configuration sets up Webpack to bundle JavaScript files, serve them with a development server, and automatically open the browser

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // inserting the index.html file into the dist folder 
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    target: 'web', // specify the target environment for the bundle (webpack)
    mode: 'development', 
    entry: path.resolve(__dirname, 'src', 'main.js'), // path.resolve to make multiplatform compatible. But just 'src/index.js' works too.
    output:{ // where pute the bundled files and his name
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'), // path.resolve to make multiplatform compatible. But just 'dist' works too.
    },

    devServer: { // configuration for the development server, auto build and open the browser
        static: {
            directory: path.join(__dirname, 'dist'), // path.resolve to make multiplatform compatible. But just 'dist' works too.
        },
        port: 3000,
        open: true, // Automatically open the browser when the server starts
        liveReload: true, // Enable live reloading
    },

    plugins: [ // extra functionality for the build process
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'), // path.resolve to make multiplatform compatible. But just 'index.html' works too.
            favicon: path.resolve("src", "assets", "scissors.svg"), // path.resolve to make multiplatform compatible. But just 'favicon.ico' works too.
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname,"src","assets"),
                    to: path.resolve(__dirname,"dist","src","assets")
                }
            ]
        }),
    ],

    module: { // rules for the modules (files) that Webpack will process
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/, // Babel is a compiler that lets your code be executed in older browsers
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                }
            }
        ]
    },

}