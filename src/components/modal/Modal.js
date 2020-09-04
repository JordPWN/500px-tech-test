import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/modal.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.handleUserKeyPress = this.handleUserKeyPress.bind(this)
  }

  handleUserKeyPress(e) {
    if (e.key === 'Escape') { this.props.closeModal() }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleUserKeyPress)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleUserKeyPress);
  }

  render() {
    const {photo, orientation, toggleModal } = this.props
    return (
      <div className="photo-modal" onClick={toggleModal} onKeyDown={this.handleUserKeyPress}>
        <div className="photo-modal-container">
          <div className={`image-container ${orientation}`}>
            <img src={photo?.image_url} alt={photo?.name} className={orientation}/>
          </div>
          <div className="photo-details">
            <h1>{photo?.name}</h1>
            <p>{photo?.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  photo: PropTypes.object.isRequired,
  orientation: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
}

export default Modal