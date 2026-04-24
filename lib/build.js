import { build } from 'esbuild'

const sources = [
  {
    input:'./node_modules/monaco-editor/esm/vs/editor/editor.main.js',
    output: './dist/editor.main.js'
  },
  {
    input: './node_modules/monaco-editor/esm/vs/editor/editor.worker.js',
    output: './dist/workers/editor.worker.js'
  },
  {
    input: './node_modules/monaco-editor/esm/vs/language/json/json.worker.js',
    output: './dist/workers/json.worker.js'
  },
  {
    input: './node_modules/monaco-editor/esm/vs/language/css/css.worker.js',
    output: './dist/workers/css.worker.js'
  },
  {
    input: './node_modules/monaco-editor/esm/vs/language/html/html.worker.js',
    output: './dist/workers/html.worker.js'
  },
  {
    input: './node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js',
    output: './dist/workers/ts.worker.js'
  }
]

for (const { input, output } of sources) {
  console.log(`${input} => ${output}`)
  await build({
    entryPoints: [input],
    bundle: true,
    format: 'esm',
    loader: {
      '.ttf': 'file',
      '.woff': 'file',
      '.woff2': 'file',
    },
    outfile: output,
  })
}
