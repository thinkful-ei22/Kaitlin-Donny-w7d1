'use strict';

import React from 'react';
import Header from './header';
import Game from './game';

export default function Main(props) {

  return(
    <div className="container">
      <div className="head"><Header /></div>
      <div className="box"><Game /></div>
    </div>
  );

}