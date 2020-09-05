import React from 'react'
import axios from 'axios'

import Album from '../components/album/Album.js'
import Navigation from '../components/navigation/Navigation.js'

import '../styles/main.scss'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      feature: 'popular',
      loading: false,
      page: 1,
      photos: [],
      results: {},
      showNsfw: true,
      sortBy: 'created_at'
    }
  }

  nudeFilter = () => {
    return this.state.showNsfw ? '&exclude=Nude' : ''
  }

  featureFilter = () =>  {
    return this.state.feature ? `&feature=${this.state.feature}` : ''
  }

  updateFeature = (event) => {
    if (event.target.value !== this.state.feature) {
      this.setState({
        feature: event.target.value,
        photos: []
      }, this.getPhotos())
    }
  }

  toggleNsfw = () => {
    this.setState({ 
      showNsfw: !this.state.showNsfw,
      photos: []
     }, this.getPhotos())
  }

  photoSet(photos) {
    return [...this.state.photos, ...photos].filter((v,i,a) => 
    a.findIndex(t => (t.id === v.id)) === i)
  }

  getPhotos = (page = 1) => {
    this.setState({ loading: true })
    axios.get(`https://api.500px.com/v1/photos?
    consumer_key=${process.env.REACT_APP_PX_API_KEY}
    &page=${page}
    ${ this.nudeFilter() }
    ${ this.featureFilter() }`)
      .then(
        res => {
          const results = res.data
          const photos = this.photoSet(results.photos)
          this.setState({
            results: results,
            page: results.current_page,
            photos: photos
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
        <Navigation
          updateFeature={this.updateFeature}
          toggleNsfw={this.toggleNsfw}
          showNsfw={this.state.showNsfw} />
        <Album
          id='album'
          photos={this.state.photos}
          getPhotos={this.getPhotos}
          page={this.state.page}
          loading={this.state.loading} />
      </div>
    )
  }
}
