import { Component } from 'react'


import '../css/loading.css'


export default class Loading extends Component {
  render() {
    return (
      <div>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}
