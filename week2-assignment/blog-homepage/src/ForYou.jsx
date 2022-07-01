import React from 'react';
import Proptypes from 'prop-types';
import yourArticles from './your-articles.json';
import moment from 'moment';
import bkmrk from './bkmrk.png';
import HasAudio from './HasAudio';
import HasMemPrev from './MemPrev';

function ForYou() {
  return(
    <>
      {yourArticles.map((article) => (
        <div key={article.id} className="col">
          <div key={article.id} className="card h-100 mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={article.image} 
                  className="img-fluid" 
                  alt="Article image"/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <small>
                  <p>{HasAudio(article.hasAudioAvailable)}
                  {HasMemPrev(article.memberPreview)}</p>
                  </small>
                  <a 
                    className="card-title Title" 
                    href={article.link}>{article.title}
                  </a>
                  <p className="card-text">{article.description}</p>
                  <div className="row float-end">
                    <div className="col-md-4 Author-info">
                      <img 
                      className="Author-pic img-fluid" 
                      src={article.author.image} 
                      alt="Image of author"/>
                    </div>
                    <div className="col-md-8"> 
                      <small className="text-muted">
                        <p className="fw-bold">{article.author.name} 
                        <img className="Bkmrk-pic ms-3" src={bkmrk}/></p>
                        <p>{moment(article.postedDate).format("MMM Do")} · {article.minutesToRead} min read</p>
                        <p></p>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    ))}
    </>
  )
}

ForYou.propTypes = {
  id: Proptypes.number.isRequired,
  image: Proptypes.string.isRequired,
  link: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  author: Proptypes.shape({
    image: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired
  }),
  bkmrk: Proptypes.string.isRequired,
  postedDate: Proptypes.string.isRequired,
  minutesToRead: Proptypes.number.isRequired,
}

export default ForYou;
