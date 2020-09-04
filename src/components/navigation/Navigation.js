import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/navigation.scss'

class Navigation extends React.Component {

  features = [
    { query: 'popular', label: 'Popular'},
    { query: 'highest_rated', label: 'Highest Rated'},
    { query: 'upcoming', label: 'Upcoming'},
    { query: 'editors', label: 'Editors\'s Pick'},
    { query: 'fresh_today', label: 'Fresh Today'},
    { query: 'fresh_yesterday', label: 'Fresh Yesterday'},
    { query: 'fresh_week', label: 'Fresh This Week'}
  ]

  render() {
    const features = this.features.map(
      (feature, index) => 
        <option value={feature.query} key={index}>
          {feature.label}
        </option>
    )
    const { showNsfw, toggleNsfw, updateFeature } = this.props

    const nsfwClass = showNsfw ? 'on' : ''

    return (
      <div className="navbar">
        <div className="nav nav-left">
          <div className="nav-filter nav-sort-by-feature">
            <label htmlFor="feature">Feature</label>
            <select name="feature" id="feature" onChange={updateFeature}>
              { features }
            </select>
          </div>
        </div>
        <div className="nav nav-right">
          <div className={`nav-filter nav-filter-nsfw ${nsfwClass}`}>
            <label htmlFor="nsfw">
              NSFW
            </label>
            <label className="switch">
              <input type="checkbox" id="nsfw"
              onChange={toggleNsfw} checked={showNsfw}/>
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div> 
    )
  }
}

Navigation.propTypes = {
  updateFeature: PropTypes.func.isRequired,
  toggleNsfw: PropTypes.func.isRequired,
  showNsfw: PropTypes.bool.isRequired
}

export default Navigation