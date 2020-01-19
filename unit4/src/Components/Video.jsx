import React from 'react'

class Video extends React.Component {
  constructor(props){
    super()
    this.state = {
      id: props.match.params.id
    }
  }
  render() {
    return (
      <div>
        <h1>Video</h1>
        <p>{this.state.id}</p>
      </div>
    )
  }
}

export default Video
