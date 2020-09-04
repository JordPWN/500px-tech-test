import React from 'react'
import JustifiedLayout from 'react-justified-layout'

import Photo from '../common/Photo.js'

// import '../styles/Album.scss';

export default class Album extends React.Component {
  constructor(props) {
    super(props)

    this.getPhotos = this.props.getPhotos
  }
  photosLoaded(photos) {
    if (this.props.photos) {
      return <JustifiedLayout className="album-container">
          { photos }
        </JustifiedLayout>
    } else {
      return "No photos!"
    }
  }

  loadMore = (e) => {
    const bottom = e.target.scrollHeight - Math.ceil(e.target.scrollTop) <= e.target.clientHeight + 100;
    if (bottom && !this.props.loading) { this.getPhotos(this.props.page + 1) }
  }

  render() {
    const loading = this.props.loading ? 'show': ''
    const photos = this.props.photos?.map(
      photo => <Photo photo={photo} key={photo?.id}
        aspectRatio={photo.width / photo.height} />
    )

    return (
      <div className="album" onScroll={this.loadMore}>
        <div className={`loading-overlay ${loading}`}>Loading...</div>
        <JustifiedLayout className="album-container" containerPadding={80} containerWidth={document.documentElement.clientWidth}>
          { photos }
        </JustifiedLayout>
      </div>
    );
  }
}
