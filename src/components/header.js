'use strict';

import React from 'react';
import NavigationBar from './navigation-bar';

export default function Header() {
  return (
    <header>
      <nav><ul class="clearfix"><NavigationBar /></ul></nav>
      <h1>HOT or COLD</h1>
    </header>
  );
}