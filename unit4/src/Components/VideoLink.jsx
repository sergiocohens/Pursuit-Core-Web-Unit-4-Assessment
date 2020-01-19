import React from 'react'
import { Link } from 'react-router-dom'

function VideoLink(props) {
  let url = `/video/${props.id}`
  return(
    <div className='videoLink'>
      <Link to={url}>
      <img src={props.thumbnail} alt=''></img>
      </Link>
      <h3>{props.title}</h3>
    </div>
  )
}

export default VideoLink
