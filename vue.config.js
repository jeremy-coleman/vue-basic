module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|env|glb|stl)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192
              }
            }
          ]
        }
      ]
    }
  }
}
