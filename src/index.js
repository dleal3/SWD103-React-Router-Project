import React, { Component } from 'react';
import { render } from 'react-dom';
import { Home, About} from './screens';

const Index = ({pathname}) => {
  switch(pathname) {
      case '/':
          return <Home />
      case '/about':
          return <About />
            
  }
}

let pathname = window.location.pathname;

render(
  <Index pathname={pathname} />, 
  document.getElementById('root')
)

window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
})