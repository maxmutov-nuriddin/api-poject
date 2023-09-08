import { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="bg-primary py-3 position-fixed start-0 end-0 z-3 header">
          <nav className='d-flex justify-content-between mx-5 '>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Business">Business</NavLink>
            <NavLink to="/Entertainment">Entertainment</NavLink>
            <NavLink to="/General">General</NavLink>
            <NavLink to="/Health">Health</NavLink>
            <NavLink to="/Science">Science</NavLink>
            <NavLink to="/Sports">Sports</NavLink>
            <NavLink to="/Technology">Technology</NavLink>
          </nav>
        </div>
      </>
    )
  }
}
