let mix = require('laravel-mix')

mix
.setResourceRoot('../')
.setPublicPath('dist')
.sourceMaps()

if(mix.inProduction()) {
  mix.js(
    'src/proportional.js',
    'js/proportional.min.js'
  )
} else {
  mix.js(
    'src/proportional.js',
    'js/proportional.js'
  )
}
