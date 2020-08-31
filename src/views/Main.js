import React from 'react';
import '../styles/Main.scss';

function Main() {
  return (
    <div className="main">
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
      <div className="album">
        <div className="album-container">
          Main
        </div>
      </div>     
    </div>
  );
}

export default Main;
