import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route ,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import User from './User';
import Notfound from './Notfound';
import * as serviceWorker from './serviceWorker';

console.log('%c WELCOME TO THE CONSOLE LOG', 'font-style:italic;font-weight:bold;font-size:40px;color: white; display: block;');
console.log('%c username:shaadi', 'font-style:italic;font-weight:bold;font-size:40px;background: navy; color: white; display: block;');
console.log('%c password:123', 'font-style:italic;font-weight:bold;font-size:40px;background: navy; color: white; display: block;');

var routes = (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/user/:user" component={User} />
      <Route exact path="*" component={Notfound} />
    </Switch>
  </Router>
  )

  ReactDOM.render(routes, document.getElementById('root'));

serviceWorker.unregister();
