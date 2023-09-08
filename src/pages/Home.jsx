import { Component } from 'react';
import { toast } from 'react-toastify';

import request from '../server/server';
import Card from '../components/card/Card';
import Loading from './Loading';
import SearchFilter from '../components/seacrch/SearchFilter';
import Select from '../components/select/Select';

export default class Home extends Component {
  state = {
    posts: [],
    search: '',
    nameSort: 'all',
  };

  async componentDidMount() {
    await this.getPosts(this.state.search);
  }

  getPosts = async (search) => {
    try {
      let response;

      if (search === '') {
        response = await request.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=6fb34c5bff274fa084b7191b00a196a7'
        );
      } else {
        response = await request.get(
          `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=6fb34c5bff274fa084b7191b00a196a7`
        );
      }

      const posts = response.data.articles;
      this.setState({ posts });
    } catch (err) {
      toast.error(err.response.statusText);
    }
  };

  handleSearch = (e) => {
    const searchValue = e.target.value.trim().toLowerCase();
    this.setState({ search: searchValue });
    this.getPosts(searchValue);
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

    if (!posts.length) {
      return <Loading />;
    }

    return (
      <>
        <SearchFilter search={search} handleSearch={this.handleSearch} />
        <Select handleNameSortChange={this.handleNameSortChange} nameSort={nameSort} />
        <div className='d-flex gap-5 justify-content-between flex-wrap mt-5'>
          {posts.map((post) => (
            <Card key={post.title} postData={post} />
          ))}
        </div>
      </>
    );
  }
}