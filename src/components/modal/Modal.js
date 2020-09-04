import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ photo, orientation, toggleModal }) => {
  return (
    <div className="photo-modal" onClick={toggleModal}>
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

Modal.propTypes = {
  photo: PropTypes.object.isRequired,
  orientation: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired
}

export default Modal