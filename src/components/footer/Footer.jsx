import { Component } from 'react';
import { Link } from 'react-router-dom';


import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="frame position-fixed bottom-0">
        <Link to='/notfound' className="btn">
          <i className="fab fa-facebook-f" style={{ color: '#3b5998' }}></i>
        </Link>
        <Link to='/notfound' className="btn">
          <i className="fab fa-linkedin-in" style={{ color: '#0e76a8' }}></i>
        </Link>
        <a target='blank' href="https://instagram.com/mv.nuriddin?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" className="btn">
          <i className="fab fa-instagram" style={{ color: '#c32aa3' }}></i>
        </a>
        <a target='blank' href="https://t.me/mv_nuriddin" className="btn">
          <i className="fab fa-telegram-plane" style={{ color: '#0088cc' }}></i>
        </a>
        <a target='blank' href="https://github.com/maxmutov-nuriddin" className="btn">
          <i className="fab fa-github" style={{ color: '#333' }}></i>
        </a>
        <a target='blank' href="https://app.netlify.com/teams/maxmutov-nuriddin/overview" className="btn">
          <i className="fas fa-cloud-upload-alt" style={{ color: '#00ad9f' }}></i>
        </a>
      </div>
    );
  }
}
