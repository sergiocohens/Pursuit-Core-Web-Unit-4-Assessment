import React from 'react'

const Comment = (props) => {
  return (
    <div className='comment'>
      <h2>{props.name}</h2>
      <p>{props.comment}</p>
    </div>
  )
}

export default Comment
