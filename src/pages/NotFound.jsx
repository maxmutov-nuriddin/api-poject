import { Component } from 'react';

import '../css/notfoud.css'
import '../js/main.js'
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <>
        <main>
          <h1>4<span><i className="fas fa-ghost"></i></span>4</h1>
          <h2>Error: 404 page not found</h2>
          <p>Sorry, the page youre looking for cannot be accessed</p>
          <Link className='back_page' to="/">BACK</Link>
        </main>
      </>
    );
  }
}