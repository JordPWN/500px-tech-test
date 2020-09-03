import React from 'react';

// import '../styles/Photo.scss';

export default class Photo extends React.Component {
  render() {
    return (
      <div className="photo" style={this.props.style}>
        <img src={this.props.photo.image_url} alt={this.props.photo.name} />
      </div>
    );
  }
}
