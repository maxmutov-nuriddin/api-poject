import { Component } from 'react';
import { toast } from 'react-toastify';
import request from '../../server/server';
import Cards from '../../components/card/Cards';

export default class AboutPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async getPosts() {
    try {
      let urlId = window.location.pathname.split("/").slice(-1)[0];
      console.log(urlId);
      const response = await request.get(
        `https://newsapi.org/v2/top-headlines?sources=${urlId}&apiKey=9a001faea4854052b28f604730cdce0d`
      );
      const posts = response.data.articles;
      console.log(posts);
      this.setState({ posts });
    } catch (err) {
      toast.error(err.response.statusText);
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { posts } = this.state;
    return <div>
      <div className='d-flex gap-5 justify-content-between flex-wrap mt-5 mb-5'>
        {posts.map((post) => (
          <Cards key={post.title} postData={post} />
        ))}
      </div>
    </div>;
  }
}