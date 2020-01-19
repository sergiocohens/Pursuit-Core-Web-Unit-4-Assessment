import React from 'react'
import { Route, Link } from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Video from './Components/Video'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav className='navBar'>
          <span id='youtube'>Youtube</span>
          <Link to="/" style={{ textDecoration: 'none' }} id='home'>Home</Link>
          <Link to="/about" style={{ textDecoration: 'none' }} id='about'>About</Link>
        </nav>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/video/:id" component={Video} />
        </div>
      </div>
    )
  }
}

export default App;
