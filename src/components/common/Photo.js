import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../modal/Modal.js'

// import '../styles/photo.scss'

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  static defaultProps = {
    modalsEnabled: true
  }

  toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

  render() {
    const { photo } = this.props
    const orientation = (photo.height >= photo.width) ? "portrait" : "landscape"
    const modal = this.state.showModal && this.props.modalsEnabled ? <Modal toggleModal={this.toggleModal} orientation={orientation} photo={photo} />: ''

    return (
      <div className="photo" style={this.props.style}>
        <img src={photo.image_url} alt={photo.name} onClick={this.toggleModal}/>
        { modal }
      </div>
    )
  }
}

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
  style: PropTypes.object,
  modalsEnabled: PropTypes.bool.isRequired
}

export default Photo