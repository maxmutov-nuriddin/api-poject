import { Component } from 'react';
import { toast } from 'react-toastify';

import request from '../server/server';
import Card from '../components/card/Card';
import Select from '../components/select/Select';
import SearchFilter from '../components/seacrch/SearchFilter';

export default class ServerCard extends Component {
  state = {
    posts: [],
    search: '',
    nameSort: 'all',
  };


  async getPosts() {
    try {
      const { postId } = this.props;
      const response = await request.get(
        `https://newsapi.org/v2/top-headlines?country=&category=${postId}&apiKey=9a001faea4854052b28f604730cdce0d`
      );
      const posts = response.data.articles;
      this.setState({ posts });
    } catch (err) {
      toast.error(err.response.statusText);
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  handleSearch = (e) => {
    const { posts } = this.state;
    const searchValue = e.target.value.trim().toLowerCase();

    let filteredPosts = posts;
    if (searchValue !== '') {
      filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue)
      );
    }

    this.setState({ search: searchValue, posts: filteredPosts });
  };

  handleNameSortChange = (event) => {
    this.setState({ nameSort: event.target.value }, () => {
      this.sortPosts();
    });
  };

  sortPosts() {
    const { posts, nameSort } = this.state;

    if (nameSort !== 'all') {
      posts.sort((a, b) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();

        if (nameSort === 'asc') {
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
        } else {
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
        }

        return 0;
      });
    }

    this.setState({ posts });
  }

  render() {
    const { posts, search, nameSort } = this.state;

    return (
      <div>
        <SearchFilter search={search} handleSearch={this.handleSearch} />
        <Select handleNameSortChange={this.handleNameSortChange} nameSort={nameSort} />
        <div className='d-flex gap-5 justify-content-between flex-wrap mt-5 mb-5'>
          {posts.map((post) => (
            <Card key={post.title} postData={post} />
          ))}
        </div>
      </div>
    );
  }
}