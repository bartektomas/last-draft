import React, {Component} from 'react'
import icons from '../../components/Buttons/'
import insertDataBlock from '../../utils/insertDataBlock'
const styled = require('styled-components').default

export default class extends Component {
  onClick (e) {
    e.preventDefault()
    const src = window.prompt('Enter the video URL')
    if (!src) { return }

    const data = {src: src, type: 'video'}
    this.props.onChange(insertDataBlock(this.props.editorState, data))
  }

  render () {
    return (
      <VideoButton type='button' onClick={::this.onClick} className='ld-video-block-button'>
        <icons.VideoIcon />
      </VideoButton>
    )
  }
}

const VideoButton = styled.button`
  background: none;
  border: 0;
  color: #fff;
  cursor: pointer;
  height: 32px;
  font-size: 0;
  padding: 0;
  width: 32px;
  transition: all 0.5s ease;
  position: relative;
  background: none;
  transform: scale(0.9);

  &:hover {
    transform: scale(1);
  }
  &:before {
    transition: all 0.1s ease-in-out;
    background-color: #181818;
    transform: scale(1.125);
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 100%;
    display: inline-block;
    background-color: #181818;
  }
  &:focus {
    outline: none;
  }
`
