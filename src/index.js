import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
//here firstly dont get confused we were rendering individual cards like <card id={robots[0].id}, name={robots[0].name}...>
//but that is not efficient so we created a cardlist to do that separately and used it in app.js check it
ReactDOM.render(
          <App/>,document.getElementById('root'));

//greeting is a prop
reportWebVitals();
