import React from 'react';
import axios from 'axios';

import Album from '../components/album/Album.js'
import Navigation from '../components/navigation/Navigation.js'

import '../styles/Main.scss';

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.album = React.createRef()
    this.state = {
      results: {},
      page: 1,
      photos: [],
      loading: false,
      isScrolling: false,
      showNsfw: true,
      feature: 'fresh_today',
      threshold: 100,
      throttle: 64,
    }
  }

  nudeFilter() {
    return this.state.showNsfw ? '&exclude=nude' : ''
  }

  featureFilter() {
    return this.state.feature ? `&feature=${this.state.feature}` : ''
  }

  getPhotos = (page) => {
    this.setState({ loading: true })
    axios.get(`https://api.500px.com/v1/photos?
    consumer_key=${process.env.REACT_APP_PX_API_KEY}
    &page=${page}
    ${ this.nudeFilter() }
    ${ this.featureFilter() }`)
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

  componentDidMount() {
    this.getPhotos(this.state.page)
  }

  render() {
    return (
      <div className="main" id='main'>
        <Navigation />
        <Album
          id='album'
          photos={this.state.photos}
          ref={this.album}
          getPhotos={this.getPhotos}
          page={this.state.page}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
