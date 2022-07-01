import React from 'react';
import Proptypes from 'prop-types';
import missedArticles from './missed-articles.json'
import moment from 'moment';
import bkmrk from './bkmrk.png';
import HasAudio from './HasAudio';
import HasMemPrev from './MemPrev';

function Missed() {
  return (
    <>
      {missedArticles.map((article) => (
        <div key={article.id} className="col">
          <div key={article.id} className="card h-100">
            <img 
              src={article.image} 
              className="img-fluid" 
              alt="Article image"/>
            <div className="card-body">
              <small>
                <p>{HasAudio(article.hasAudioAvailable)}
                {HasMemPrev(article.memberPreview)}</p>
              </small>
              <a 
                className="card-title Title" 
                href={article.link}>{article.title}</a>
              <p className="card-text">{article.description}</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img 
                  className="Author-pic" 
                  src={article.author.image} 
                  alt="Image of author"/>
              </div>
              <div className="col-md-8"> 
                <small className="text-muted">
                  <p >{article.author.name}
                  <img className="Bkmrk-pic ms-3" src={bkmrk}/></p>
                  <p>{moment(article.postedDate).format("MMM Do")} · {article.minutesToRead}-minute read</p>
                  <p></p>
                </small>
              </div>
            </div>
          </div>
        </div>
    ))}
    </>
  )
}

Missed.propTypes = {
  id: Proptypes.number,
  image: Proptypes.string,
  link: Proptypes.string,
  title: Proptypes.string,
  description: Proptypes.string,
  author: Proptypes.shape({
    image: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired
  }),
  bkmrk: Proptypes.string,
  postedDate: Proptypes.string,
  minutesToRead: Proptypes.number,
}

export default Missed;
