import React, { useEffect, useState, useRef  } from 'react';
import axios from 'axios';

import Album from '../components/album/Album.js'
import Navigation from '../components/navigation/Navigation.js'

import '../styles/Main.scss';


export default class Main extends React.Component {
  state = {
    results: {},
    page: 1,
    photos: [],
    loading: false
  }

  getPhotos(page) {
    this.setState({ loading: true })
    axios.get(`https://api.500px.com/v1/photos?consumer_key=${process.env.REACT_APP_PX_API_KEY}&feature=popular&page=${page}`)
      .then(
        res => {
          const results = res.data
          this.setState({
            results: results,
            page: results.current_page,
            photos: [...this.state.photos, ...results.photos]
          })
          this.setState({ loading: false })
        },
        error => {
          console.log(error)
        }
      )
  }

  loadMore() {
    this.getPhotos(this.state.page + 1)
  }

  componentDidMount() {
    this.getPhotos(this.state.page)
  }

  render() {
    const isLoading = { display: this.state.loading ? "flex" : "none" }
    return (
      <div className="main">
        <Navigation />
        <Album photos={this.state.photos}/>
        <div className="loading" style={isLoading}>Loading!</div>
        <button className="more" onClick={this.loadMore.bind(this)}>
          More for you!
        </button>
      </div>
    );
  }
}
