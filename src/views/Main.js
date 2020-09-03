import React from 'react';
import axios from 'axios';

import Album from '../components/album/Album.js'

import '../styles/Main.scss';


export default class Main extends React.Component {
  state = {
    results: {},
    photos: []
  }

  componentDidMount() {
    axios.get(`https://api.500px.com/v1/photos?consumer_key=${process.env.REACT_APP_PX_API_KEY}&feature=popular`)
      .then(res => {
        const results = res.data;
        this.setState({ results });
        this.setState({ photos: results.photos });
      })
  }

  render() {
    return (
      <div className="main">
        <div className="navbar">
          <div className="nav nav-left">
            <div className="nav-sort-by-feature">
              Sort
            </div>
          </div>
          <div className="nav nav-right">
            <div className="nav-filter-nsfw">
              NSFW
            </div>
          </div>
        </div> 
        <Album photos={this.state.photos}/>
      </div>
    );
  }
}
