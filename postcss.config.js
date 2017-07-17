module.exports = {
  plugins: [
    require('postcss-flexible')({remUnit: 75}),
    require('postcss-cssnext')
  ],
  sourceMap: true
}
