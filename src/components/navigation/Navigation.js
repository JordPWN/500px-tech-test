import React from 'react';

// import '../styles/navigation.scss';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav nav-left">
          <div className="nav-sort-by-feature">
            Sort
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


