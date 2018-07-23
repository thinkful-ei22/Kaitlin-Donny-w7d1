'use strict';

import React from 'react';


export default function NavigationBar(props) {

  const linksArray = [{
    text: 'What?',
    href: '#'
  }, {
    text: '+ New Game',
    href: '#'
  }];

  // map out array
  const links = linksArray.map( (link, index)=> (
    <li key={index}><a href={link.href}>{link.text}</a></li>
  ));

  // Navigation bar content here

  return(
    
      <ul >{links}</ul>
  )

};
