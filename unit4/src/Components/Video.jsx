import React from 'react'
import axios from 'axios'
import YouTube from 'react-youtube'
import API_KEY from '../secrets'
import Comment from './Comment'

class Video extends React.Component {
  constructor(props){
    super()
    this.state = {
      id: props.match.params.id,
      reminder: '',
      nameInput: '',
      commentInput: '',
      comments: []
    }
  }

  handleNameInput = (e) => {
    this.setState({
      nameInput: e.target.value
    })
  }

  handleCommentInput = (e) => {
    this.setState({
      commentInput: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { nameInput, commentInput, comments} = this.state
    if (nameInput !== '' & commentInput !== '') {
      let commentObj = {
        name: nameInput,
        comment: commentInput
      }
      comments.unshift(commentObj)
      this.setState({
        nameInput: '',
        commentInput: '',
        comments: comments
      })
    } else {
       window.alert('All fields required')
    }
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      autoplay: 1
    }
    const { id, comments, commentInput, nameInput} = this.state
    return (

      <div className='videoContainer'>
        <YouTube
          videoId={id}
          opts= {opts}
          onReady= {this._onReady}
          id='video'
        />
        <form className='commentsForm' onSubmit={this.handleSubmit}>
          <h4>Name</h4>
          <input className='input' type='text' placeholder='Name...' onChange={this.handleNameInput} value={nameInput}></input>
          <h4>Comment</h4>
          <input className='input' type='text' placeholder='...' onChange={this.handleCommentInput} value={commentInput}></input>
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

  _onReady(event) {
    event.target.pauseVideo()
  }
}

export default Video
