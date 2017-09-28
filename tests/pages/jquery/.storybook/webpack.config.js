const path = require('path');
const includePath = path.resolve(__dirname, '..');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader'
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: 'file-loader'
      },
      {
        test: /\.md$/,
        use: "raw-loader"
      }
    ]
  }
};