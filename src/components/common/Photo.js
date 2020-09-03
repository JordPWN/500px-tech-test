import React from 'react';

// import '../styles/Photo.scss';


export default class Photo extends React.Component {
  render() {
    return (
      <div className="photo">
        <div className="photo-container">
          <img src={this.props.photo.image_url} alt='' />
        </div>
      </div>
    );
  }
}
