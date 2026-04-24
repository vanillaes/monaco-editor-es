const CopyPlugin = require('copy-webpack-plugin')
const { join, resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
	entry: {
		// Package each language's worker and give these filenames in `getWorkerUrl`
    "editor.main.js": 'monaco-editor/esm/vs/editor/editor.main.js',
    "workers/editor.worker.js": 'monaco-editor/esm/vs/editor/editor.worker.js',
    "workers/json.worker.js": 'monaco-editor/esm/vs/language/json/json.worker.js',
    "workers/css.worker.js": 'monaco-editor/esm/vs/language/css/css.worker.js',
    "workers/html.worker.js": 'monaco-editor/esm/vs/language/html/html.worker.js',
    "workers/ts.worker.js": 'monaco-editor/esm/vs/language/typescript/ts.worker.js',
	},
  experiments: {
    outputModule: true,
  },
  output: {
    library: {
      type: 'modern-module', 
    },
		globalObject: 'self',
		filename: '[name]',
		path: join(resolve(__dirname), 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ttf$/,
				use: ['file-loader']
			}
		]
	},
  plugins: [
    // don't chunk the output
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    // copy legal notices over
    new CopyPlugin({
      patterns: [
        { from: 'node_modules/monaco-editor/ThirdPartyNotices.txt' },
      ],
    })
  ]
}
