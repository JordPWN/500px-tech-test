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
          <div className="nav-filter-nsfw">
            NSFW
          </div>
        </div>
      </div> 
    );
  }
}


