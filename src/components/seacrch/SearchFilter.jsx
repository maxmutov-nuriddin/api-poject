import { Component } from 'react'

export default class SearchFilter extends Component {
  render() {
    const { handleSearch, search } = this.props;
    return (
      <div>
        <input className='w-100 mt-1' type="text" value={search}
          onChange={handleSearch}
          placeholder="Search..." />
      </div>
    )
  }
}
