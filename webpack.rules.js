module.exports = [
  // Add support for native node modules
  {
    // We're specifying native_modules in the test because the asset relocator loader generates a
    // "fake" .node file which is really a cjs file.
    test: /native_modules[/\\].+\.node$/,
    use: 'node-loader',
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@vercel/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Resolving files paths
      "resolve-url-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  },
  {
    test: /\.twig$/,
    use: [
      'raw-loader',
      {
        loader: 'twig-html-loader',
        options: {
          data: {}
        }
      }
    ]
  },
  {
    test: /\.ogg|webm$/,
    use: [
      'file-loader'
    ]
  }
];
