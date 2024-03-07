import React from 'react';
import ReactDOM from 'react-dom'; // used to hook our react app to the index.html file

import App from './App'; // import the App component from the App.js file

import './index.css' // import the index.css file


// This process effectively brings your React application to life by displaying the visual elements and functionalities defined within the App component and its potential subcomponents on the web page.
ReactDOM.render(<App />, document.getElementById('root')); // render the App component inside of the root div in the index.html file