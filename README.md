# rollup-plugin-tiled

[Tiled](http://www.mapeditor.org/) Map (TMX) importer plugin for rollup

## Installation

```bash
npm i -D rollup-plugin-tiled
```


## Usage

```js
import { rollup } from 'rollup'
import tiled from 'rollup-plugin-tiled'

rollup({
  entry: 'main.js',
  plugins: [
    tiled()
  ]
}).then(...)
```

Later in your code...

```js
import map from './maps/map.tmx'

// do stuff with map object

```

