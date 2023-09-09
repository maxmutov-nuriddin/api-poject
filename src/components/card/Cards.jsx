import { Component } from 'react'

export default class Cards extends Component {
  render() {
    let { postData } = this.props;


    return (
      <>
        <div>
          <div className="contents d-flex align-items-center flex-wrap">
            <div className='fs-5'><span className='titles'>Title</span>: {postData.title}</div>
            <div className='fs-5'><span className='titles'>Description</span>: {postData.description}</div>
            <div className='fs-5'><span className='titles'>Data</span>: {postData.publishedAt}</div>
          </div>
        </div>
      </>
    )
  }
}
