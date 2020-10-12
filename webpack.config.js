const path = require('path');

module.exports = {
  entry: './src/renderer/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/src/renderer'),
    historyApiFallback: true,
    compress: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: path.join(__dirname, '/src/renderer'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|jpe?g|gif|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
