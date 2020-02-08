import React, { useState } from 'react'
import YouTube from 'react-youtube'
import Comment from './Comment'

const Video = (props) => {
  const id = props.match.params.id
  const [nameInput, setNameInput] = useState('')
  const [commentInput, setCommentInput] = useState('')
  const [comments, setComments] = useState([])

  const handleNameInput = (e) => {
    setNameInput(e.target.value)
  }

  const handleCommentInput = (e) => {
    setCommentInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nameInput !== '' & commentInput !== '') {
      let commentObj = {
        name: nameInput,
        comment: commentInput
      }
      comments.unshift(commentObj)
      setNameInput('')
      setCommentInput('')
      setComments(comments)
    } else {
       window.alert('All fields required')
    }
  }

  const opts = {
    height: '390',
    width: '640',
    autoplay: 1
  }

  const _onReady = (event) => {
    event.target.pauseVideo()
  }

  return (
    <div className='videoContainer'>
      <YouTube
        videoId={id}
        opts= {opts}
        onReady= {_onReady}
        id='video'
      />
      <form className='commentsForm' onSubmit={handleSubmit}>
        <h4>Name</h4>
        <input className='input' type='text' placeholder='Name...' onChange={handleNameInput} value={nameInput}></input>
        <h4>Comment</h4>
        <input className='input' type='text' placeholder='...' onChange={handleCommentInput} value={commentInput}></input>
        <br/>
        <button id='submitButton'>Submit</button>
      </form>
      <div className='commentsContainer'>
        <hr></hr>
        {comments.map((e) => (
          <Comment name={e.name} comment={e.comment}/>
        ))}
      </div>
    </div>
  )
}

export default Video
