//import 'babel-polyfill'; // Only for Object.assign it seems
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import './styles/styles.css';
import './styles/font-awesome-4.7.0/css/font-awesome.min.css'

render(
  <Router history={browserHistory}
    routes={routes} />,
  document.getElementById('app')
);
