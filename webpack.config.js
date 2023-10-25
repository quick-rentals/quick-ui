import HtmlWebpackPlugin from 'html-webpack-plugin';

process.env.NODE_ENV = 'development';
const host = process.env.HOST || 'localhost';

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './index.tsx',
  output: {
    filename: 'static/js/bundle.js',
  },
  devServer: {
    compress: true,
    hot: true,
    host,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?[jt]sx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.cjs', '.jsx', '.tsx', '.ts'],
    modules: ['node_modules'],
  },
};
