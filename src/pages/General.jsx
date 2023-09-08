import { Component } from 'react'

import ServerCard from '../server/ServerCard';

export default class General extends Component {
  render() {
    let postId = window.location.pathname.split("/").at(-1);

    
    return (
      <ServerCard key={postId} postId={postId} />
    );
  }
}
