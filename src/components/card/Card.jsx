import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Card extends Component {
  render() {
    let { postData } = this.props;

    return (
      <>
        <div className='box'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content d-flex align-items-center">
            <Link to={`/AboutPage/${postData.source.name}`} className='fs-5'>{postData.title}</Link>
          </div>
        </div>
      </>
    )
  }
}
