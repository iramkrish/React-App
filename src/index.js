import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import User from './User';
import Notfound from './Notfound';
import * as serviceWorker from './serviceWorker';

const routes = (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/user/:user" component={User} />
      <Route exact path="*" component={Notfound} />
    </Switch>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

serviceWorker.unregister();
