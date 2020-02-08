import React, { useState } from 'react'
import axios from 'axios'
import API_KEY from '../secrets'
import VideoLink from './VideoLink'

const Home = () => {
  const [searchInput, setSearchInput] = useState('')
  const [videosArray, setVideosArray] = useState('')

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=8&q=${searchInput}`)
      setVideosArray(response.data.items)
    }
    catch (err) {
      console.log(err)
    }
  }

  if (videosArray === '') {
    return (
      <div>
        <form className='searchForm' onSubmit={handleSubmit}>
          <input id='searchBar' type='text' placeholder='Search...' onChange={handleSearchInput}></input>
          <button id='searchButton'>Search</button>
        </form>
        <p id='grayText'>No Search Results. Search for videos above!</p>
      </div>
    )
  } else {
    return (
      <div>
        <form className='searchForm' onSubmit={handleSubmit}>
          <input id='searchBar' type='text' placeholder='Search...' onChange={handleSearchInput}></input>
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

export default Home
