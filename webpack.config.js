import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: './src/main.js',
  output: {
    filename: "[production.js",
    path: path.resolve(__dirname, 'dist'),
  },
module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
  plugins: [
        new HtmlWebpackPlugin({
            title: 'Super Task Tracker',
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
      ],
      mode: 'development',
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
};
