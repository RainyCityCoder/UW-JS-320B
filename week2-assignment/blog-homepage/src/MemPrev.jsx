import React from 'react';

function HasMemPrev(arg) {
  if (arg) {
    return (<p>Member Preview</p>)
  } else {
    return (<p></p>)
  }
  // return (arg ? <p>Audio Available</p> : <p></p>);
}

export default HasMemPrev;