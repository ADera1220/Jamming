//import React library needed to use React features 
import React from 'react';
//import ReactDOM library, only needed in this file, because this file renders the whole page
import ReactDOM from 'react-dom';
//import styles
import './index.css';
//import the 'App' component, which compiles all the content
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';

// ReactDOM method that renders the page, only needed in this file because this is a SPA
ReactDOM.render(
  <React.StrictMode>
    {/* App component being rendered contains all the page data */}
    <App />
  </React.StrictMode>,
  // selector method pulls the 'root' ID'ed element from the DOM to render this information
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();