import React from 'react'
import ReactDOM from 'react-dom'
import Main from './containers/Main.jsx'


window.onload = () => {
  ReactDOM.render(
    <Main/>,
    document.getElementById('app')
  );
};
