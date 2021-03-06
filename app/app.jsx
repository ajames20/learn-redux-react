import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// Load Foundation
$(document).foundation();

//CSs
require('style!css!sass!applicationStyles');

ReactDOM.render(<h1>React with Redux</h1>, document.getElementById('app'));

// require('./redux-example.jsx');
require('./redux-todo-example.jsx');
