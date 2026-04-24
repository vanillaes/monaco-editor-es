<h1 align="center">Monaco-Editor-ES</h1>

<div align="center">
  <a href="https://github.com/vanillaes/monaco-editor-es/tags"><img src="https://badgen.net/github/tag/vanillaes/monaco-editor-es?cache-control=no-cache" alt="GitHub Tag"></a>
  <a href="https://npmjs.com/package/@vanillaes/monaco-editor-es"><img src="https://badgen.net/npm/dw/@vanillaes/monaco-editor-es?icon=npm" alt="NPM Weekly Downloads"></a>
  <a href="https://jsr.io/@vanillaes/monaco-editor-es"><img src="https://jsr.io/badges/@vanillaes/monaco-editor-es/weekly-downloads" alt="JSR Weekly Downloads"></a>
  <a href="https://jsr.io/@vanillaes/monaco-editor-es"><img src="https://jsr.io/badges/@vanillaes/monaco-editor-es/score" alt="JSR Score"></a>
  <a href="https://github.com/vanillaes/monaco-editor-es/actions"><img src="https://github.com/vanillaes/monaco-editor-es/workflows/Release/badge.svg" alt="Release Status"></a>
  <a href="https://github.com/vanillaes/monaco-editor-es/actions"><img src="https://github.com/vanillaes/monaco-editor-es/workflows/Release/badge.svg" alt="Release Status"></a>
</div>

## Installation

```sh
npm i @vanillaes/monaco-editor-es
```

## Usage

### Step 1 - Import the script and styles

```javascript
import * as monaco from '../node_modules/@vanillaes/monaco-editor-es/dist/editor.main.js'
import sheet from '../node_modules/@vanillaes/monaco-editor-es/dist/editor.main.css' with { type: "css" }
document.adoptedStyleSheets = [sheet]
```

### Step 2 - Define where the workers are located

```javascript
const workersDir = new URL('../node_modules/@vanillaes/monaco-editor-es/dist/workers/', import.meta.url)
self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    switch (label) {
      case 'css':
      case 'less':
      case 'scss':
        return `${workersDir}/css.worker.js`
      case 'html':
      case 'handlebars':
      case 'razor':
        return `${workersDir}/html.worker.js`
      case 'javascript':
      case 'typescript':
        return `${workersDir}/ts.worker.js`
      case 'json':
        return `${workersDir}/json.worker.js`
      default:
        return `${workersDir}/editor.worker.js`
    }
  }
}
```

### Step 3 - Create the MonacoEditor

```javascript
monaco.editor.create(document.getElementById('#editor'), {
  language: 'javascript',
  theme: 'vs-dark'
})
```

For more info on Monaco Editor see the [Official Documentation][]

[Official Documentation]: https://microsoft.github.io/monaco-editor/index.html
