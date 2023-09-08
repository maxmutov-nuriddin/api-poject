import { Component } from 'react'

export default class Select extends Component {
  render() {
    let { nameSort, handleNameSortChange } = this.props
    return (
      <div>
        <select className='select' value={nameSort} onChange={handleNameSortChange}>
          <option value='all'>all</option>
          <option value='asc'>asc</option>
          <option value='desc'>desc</option>
        </select>
      </div>
    )
  }
}
