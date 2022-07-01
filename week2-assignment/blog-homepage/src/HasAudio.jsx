import React from 'react';

function HasAudio(arg) {
  if (arg) {
    return (<p>Audio Available</p>)
  } else {
    return (<p></p>)
  }
  // return (arg ? <p>Audio Available</p> : <p></p>);
}

export default HasAudio;