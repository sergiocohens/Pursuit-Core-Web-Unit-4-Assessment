import React from 'react'
import { Link } from 'react-router-dom'

function VideoLink(props) {
  let url = `/video/${props.id}`
  return(
    <div className='videoLink'>
      <Link to={url}>
      <img className='thumbnail' src={props.thumbnail} alt=''></img>
      </Link>
      <h4>{props.title}</h4>
    </div>
  )
}

export default VideoLink
