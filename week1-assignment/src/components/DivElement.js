// Import HTMLElement here

import HTMLElement from './HTMLElement';

// Define class here

class DivElement extends HTMLElement {
// Better to use uncommented technique below to 
// ensure both args get passed to parent constructor
//  constructor(content) {
//    super();
//    this.tag = 'div';
//    this.content = content;
//  }
  constructor(content) {
    super('div', content)
}

// Export class here

export default DivElement;
