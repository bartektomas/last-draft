# [last-draft](http://lastdraft.vace.nz)

[![npm version](https://badge.fury.io/js/last-draft.svg)](https://badge.fury.io/js/last-draft)

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

![](https://raw.githubusercontent.com/vacenz/last-draft/master/example/public/screenshot.png)

last-draft is a Draft.js editor built with [draft-js-plugins](https://draft-js-plugins.com)

# Install
```jsx
npm install last-draft --save
```

# Docs

## Example

Check out this awesome 🌠🎉🏄 [Last Draft example](https://github.com/vacenz/last-draft-example)

To run the example simply `git clone`, then run `yarn install` and `npm run dev`

## Use
```jsx
import React, { Component } from 'react'
import { render } from 'react-dom'
import {Editor, editorStateFromHtml, editorStateToHtml, editorStateFromRaw, editorStateToJSON} from 'last-draft'

/* init the state, either from raw or html */
import raw from './initialState/raw'

export default class ExampleEditor extends Component {
  constructor(props) {
    super(props)
    const INITIAL_STATE = editorStateFromRaw(raw)
    this.state = { value: INITIAL_STATE }
  }

  onChange(editorState) {
    this.setState({ value: editorState })
    console.log(editorStateToHtml(editorState))
    console.log(editorStateToJSON(editorState))
  }

  render() {
    return (
      <Editor
        editorState={this.state.value}
        placeholder='Enter text...'
        onChange={::this.onChange} />
    )
  }
}
```

## Props

#### `sideToolbar`
Array of plugins to include in the sideToolbar, any of the following: `image`, `video` and `emoji` plugins.

By default all sideToolbar plugins are included:

```jsx
let SIDE_TOOLBAR = ['image', 'video', 'emoji']

<Editor
  editorState={this.state.value}
  sideToolbar={SIDE_TOOLBAR}
  onChange={::this.onChange} />
```

#### `inlineToolbar`
Customize the buttons on the inline toolbar to toggle inline styles, block styles and link entities, any of the following: `bold`, `italic`, `link`, `ul`, `ol`, `h2`, `blockquote`, `pullquote`, `alignment`.

By default all inlineToolbar buttons are included:

```jsx
let INLINE_TOOLBAR = ['bold', 'italic', 'link', 'ul', 'ol', 'h2', 'blockquote', 'pullquote', 'alignment']

<Editor
  editorState={this.state.value}
  inlineToolbar={INLINE_TOOLBAR}
  onChange={::this.onChange} />
```

#### `uploadImageCallBack`

A callback to parse the url for example uploading the file to S3 or a database and returning the url. Returns a promise which should return an object with a src property e.g. `resolve({ src: 'http://imgur.com/yrwFoXT.jpg' })`

```jsx
<Editor
  editorState={this.state.value}
  uploadImageCallBack={uploadImageCallBack}
  onChange={::this.onChange} />

function uploadImageCallBack(file) {
  return new Promise(
    (resolve, reject) => {
      /* simulating a 2 second call to parse file and return an img src... */
      setTimeout( () => {
        const src = 'http://imgur.com/yrwFoXT.jpg'
        resolve({ src: src })
      }, 2000)
    }
  )
}
```

## Styles

Last Draft uses styled-components 💅 for the base styling.

You can add custom css to override this base styling with the following class names:

**Block styles**

```css
.header {}
.unordered-list {}
.ordered-list {}
.pullquote {}
.blockquote {}
.align-wrapper {}
.align-left {}
.align-center {}
.align-right {}
```

**Entity styles**

```css
.ld-link {}
.ld-hashtag {}
```

**Plugin Block styles**

```css
.ld-block-wrapper {}
.ld-block {}
.ld-block-actions-wrapper {}
.ld-block-actions {}
.ld-block-action {}
.ld-block-content {}
.ld-block-input-wrapper {}
.ld-block-input {}
.ld-image-block {}
.ld-image-placeholder-block {}
.ld-image-block-button {}
.ld-video-block-wrapper {}
.ld-video-block {}
.ld-video-block-button {}
.ld-emoji {}
.ld-emoji-modal {}
.ld-emoji-close-icon {}
.ld-emoji-block-button {}
```

**Button styles**

```css
.ld-button-align-left {}
.ld-button-align-center {}
.ld-button-align-right {}
.ld-button-blockquote {}
.ld-button-bold {}
.ld-button-close {}
.ld-button-cross {}
.ld-button-emoji {}
.ld-button-error {}
.ld-button-header {}
.ld-button-image {}
.ld-button-italic {}
.ld-button-link {}
.ld-button-ordered-list {}
.ld-button-pullquote {}
.ld-button-unordered-list {}
.ld-button-unlink {}
.ld-button-video {}
```

**Inline Toolbar**

```css
.ld-toolbar-wrapper {}
.ld-toolbar {}
.ld-toolbar-error {}
.ld-toolbar-arrow {}
.ld-toolbar-button-wrapper {}
.ld-toolbar-button {}
.ld-link-toolbar-button {}
.ld-link-toolbar-item {}
.ld-link-toolbar-input {}
```

**Side Toolbar**

```css
.ld-sidebar {}
.ld-sidebar-menu-wrapper {}
.ld-sidemenu-wrapper {}
.ld-sidemenu {}
.ld-sidemenu-button {}
.ld-sidemenu-items {}
.ld-sidemenu-item {}
```

## Development

```
yarn install
npm run dev
open http://127.0.0.1:3000
```

## License

[MIT](http://isekivacenz.mit-license.org/)
