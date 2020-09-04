import React from 'react';

// import '../styles/Photo.scss';

export default class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    console.log('modal!')
    this.setState({showModal: !this.state.showModal})
  }

  render() {
    const orientation = (this.props.photo.height >= this.props.photo.width) ? "portrait" : "landscape"
    const modalElement =  
      <div className="photo-modal" onClick={this.toggleModal}>
        <div className="photo-modal-container">
          <div className={`image-container ${orientation}`}>
            <img src={this.props.photo.image_url} alt={this.props.photo.name} className={orientation}/>
          </div>
          <div class="photo-details">
            <h1>{this.props.photo.name}</h1>
            <p>{this.props.photo.description}</p>
          </div>
        </div>
      </div>
    const modal = this.state.showModal ? modalElement : ''
    return (
      <div className="photo" style={this.props.style}>
        <img src={this.props.photo.image_url} alt={this.props.photo.name} onClick={this.toggleModal}/>
        { modal }
      </div>
    );
  }
}
