import React from 'react';

// import '../styles/navigation.scss';

export default class Navigation extends React.Component {

  features = [
    { query: 'popular', label: 'Popular'},
    { query: 'highest_rated', label: 'Highest Rated'},
    { query: 'upcoming', label: 'Upcoming'},
    { query: 'editors', label: 'Editors\'s Pick'},
    { query: 'fresh_today', label: 'Fresh Today'},
    { query: 'fresh_yesterday', label: 'Fresh Yesterday'},
    { query: 'fresh_week', label: 'Fresh This Week'},
  ]

  render() {
    const features = this.features.map(
      (feature, index) => 
        <option value={feature.query} key={index}>
          {feature.label}
        </option>
      )
    return (
      <div className="navbar">
        <div className="nav nav-left">
          <div className="nav-filter nav-sort-by-feature">
            <label htmlFor="feature">Feature</label>
            <select name="feature" id="feature">
              { features }
            </select>
          </div>
        </div>
        <div className="nav nav-right">
          <div className="nav-filter nav-filter-nsfw">
            <label htmlFor="nsfw">
              NSFW
            </label>
            <label className="switch">
              <input type="checkbox" id="nsfw"/>
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div> 
    );
  }
}


