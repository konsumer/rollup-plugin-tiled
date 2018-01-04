const pkg = require('./package.json')
const external = Object.keys(pkg.dependencies).concat('path')

export default {
  input: 'index.js',
  external: external,
  output: [
    {
      format: 'cjs',
      file: pkg['main']
    },
    {
      format: 'es',
      file: pkg['jsnext:main']
    }
  ]
}
