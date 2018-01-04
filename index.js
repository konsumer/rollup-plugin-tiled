import { createFilter } from 'rollup-pluginutils'
import { parse } from 'tmx-parser'
import { dirname } from 'path'

const codeToTmx = (code, path) => new Promise((resolve, reject) => {
  parse(code, path, (err, map) => {
    if (err) return reject(err)
    // remove circular map reference
    if (map && map.layers && map.layers.length) {
      map.layers.forEach(layer => delete layer.map)
    }
    resolve(JSON.stringify(map))
  })
})

export default (options = {}) => {
  options.include = options.include || '**/*.tmx'
  const filter = createFilter(options.include, options.exclude)
  return {
    name: 'tiled',
    transform: async (code, id) => {
      if (filter(id)) {
        return {
          code: `export default ${await codeToTmx(code, dirname(id))}`,
          map: { mappings: '' }
        }
      }
    }
  }
}
