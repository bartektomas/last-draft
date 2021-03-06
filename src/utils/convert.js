import {convertFromHTML} from 'draft-convert'
import {stateToHTML} from 'draft-js-export-html'
import {Entity, convertToRaw, convertFromRaw, EditorState} from 'draft-js'
import defaultDecorator from '../decorators/defaultDecorator'

export function editorStateFromHtml (html, decorator = defaultDecorator) {
  if (html === null) {
    return EditorState.createEmpty(decorator)
  }

  const contentState = convertFromHTML({
    htmlToEntity: (nodeName, node) => {
      if (nodeName === 'a') {
        return Entity.create(
          'LINK',
          'MUTABLE',
          {url: node.href, target: node.target}
        )
      }
    },
    htmlToBlock: (nodeName, node) => {
      if (nodeName === 'img') {
        return {
          type: 'atomic',
          data: { src: node.src, type: 'image' }
        }
      }
    }
  })(html)

  return EditorState.createWithContent(contentState, decorator)
}

export function editorStateToHtml (editorState) {
  if (editorState) {
    const content = editorState.getCurrentContent()
    return stateToHTML(content, {
      blockRenderers: {
        atomic: (block) => {
          let data = block.getData()
          let url = data.get('src')
          if (url) {
            return `<img src='${url}' />`
          }
        }
      }
    })
  }
}

export function editorStateToJSON (editorState) {
  if (editorState) {
    const content = editorState.getCurrentContent()
    return JSON.stringify(convertToRaw(content), null, 2)
  }
}

export function editorStateFromRaw (rawContent, decorator = defaultDecorator) {
  if (rawContent) {
    const content = convertFromRaw(rawContent)
    return EditorState.createWithContent(content, decorator)
  } else {
    return EditorState.createEmpty(decorator)
  }
}
