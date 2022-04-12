module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
