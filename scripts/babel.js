
const { readFile, writeFile } = require('fs')
const { transformFile } = require('@babel/core')

readFile('dist/app.js.map', 'utf8', (err, sourceMap) => {
  if (err) throw err

  const options = {
    inputSourceMap: JSON.parse(sourceMap),
    plugins: [
      require('@babel/plugin-transform-arrow-functions'),
      require('@babel/plugin-transform-block-scoped-functions'),
      require('@babel/plugin-transform-block-scoping'),
      require('@babel/plugin-transform-computed-properties'),
      require('@babel/plugin-transform-destructuring'),
      require('@babel/plugin-transform-for-of'),
      require('@babel/plugin-transform-function-name'),
      require('@babel/plugin-transform-parameters'),
      require('@babel/plugin-transform-shorthand-properties'),
      require('@babel/plugin-transform-spread'),
      require('@babel/plugin-transform-template-literals')
    ]
  }

  transformFile('dist/app.js', options, (err, result) => {
    if (err) throw err

    process.stdout.write(result.code)

    writeFile('dist/app.js.map', JSON.stringify(result.map), 'utf8', err => {
      if (err) throw err
    })
  })
})
