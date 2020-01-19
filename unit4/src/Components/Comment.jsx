import React from 'react'

function Comment(props) {
  return (
    <div className='comment'>
      <h3>{props.name}</h3>
      <p>{props.comment}</p>
    </div>
  )
}

export default Comment
