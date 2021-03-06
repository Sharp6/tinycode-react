import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AttemptPage from './components/attempt/AttemptPage';
import ResultPage from './components/result/ResultPage';
import ProtectedPage from './components/user/ProtectedPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AttemptPage} />
    <Route path="attempt" component={AttemptPage} />
    <Route path="result/:id/:code" component={ResultPage} />
    <Route path="login" component={ProtectedPage} />
  </Route>
);
