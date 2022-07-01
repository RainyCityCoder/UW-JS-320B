import React from 'react';
// import PropTypes from 'prop-types';
// import missedArticles from './missed-articles.json';
// import yourArticles from './your-articles.json';
import './App.css';
import ForYou from './ForYou';
import Missed from './Missed';

function App() {
  return (
    <div className="m-2 Centered Page-width">
      <div className="mt-4 mb-3">
        <h4>For you</h4>
        <hr></hr>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 g-4 pb-4">
      <ForYou />
      </div>
      <div className="mt-3 mb-3">
        <h4>In case you missed it</h4>
        <hr></hr>
      </div>
      <div className="row row-cols-1 row-cols-sm-3 g-4">
      <Missed />
      </div>
    </div>
  )
}

export default App;
