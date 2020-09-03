import React from 'react';

import Photo from '../common/Photo.js'

// import '../styles/Album.scss';


export default class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: props.photos
    };
  }
  
  render() {
    const photos = this.props.photos?.map(
      photo => <Photo photo={photo} />
    )
    return (
      <div className="album">
        <div className="album-container">
          { photos }
        </div>
      </div>
    );
  }
}
