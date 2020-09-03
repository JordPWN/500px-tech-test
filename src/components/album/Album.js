import React from 'react';
import JustifiedLayout from 'react-justified-layout';

import Photo from '../common/Photo.js';

// import '../styles/Album.scss';

export default class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: props.photos
    };
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
  
  render() {
    const photos = this.props.photos?.map(
      photo => <Photo photo={photo} key={photo?.id}
        aspectRatio={photo.width / photo.height} />
    )

    return (
      <div className="album">
          <JustifiedLayout className="album-container" containerPadding={80} containerWidth={document.documentElement.clientWidth}>
            { photos }
          </JustifiedLayout>
        </div>
    );
  }
}
