import React from 'react'
import axios from 'axios'
import API_KEY from '../secrets'
import VideoLink from './VideoLink'

class Home extends React.Component {
  constructor(){
    super()
    this.state = {
      searchInput: '',
      videosArray: ''
    }
  }

  handleSearchInput = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=8&q=${this.state.searchInput}`)
      this.setState({
        videosArray: response.data.items
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  render() {
    const { videosArray } = this.state
    if (videosArray === '') {
      return (
        <div>
          <form className='searchForm' onSubmit={this.handleSubmit}>
            <input id='searchBar' type='text' placeholder='Search...' onChange={this.handleSearchInput}></input>
            <button id='searchButton'>Search</button>
          </form>
          <p id='grayText'>No Search Results. Search for videos above!</p>
        </div>
      )
    } else {
      return (
        <div>
          <form className='searchForm' onSubmit={this.handleSubmit}>
            <input id='searchBar' type='text' placeholder='Search...' onChange={this.handleSearchInput}></input>
            <button id='searchButton'>Search</button>
          </form>
          <div className='videoLinksContainer'>
          {videosArray.map((el) => (
            <VideoLink thumbnail={el.snippet.thumbnails.high.url} id={el.id.videoId} title={el.snippet.title}/>
          ))}
          </div>
        </div>
      )
    }
  }
}

export default Home
