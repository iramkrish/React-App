import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Form from './Form';

class App extends React.PureComponent {
  render() {
    const { history } = this.props;
    return (
      <Form history={history} tagline="Login" label1="username" label2="password" />
    );
  }
}

App.propTypes = {
  history: PropTypes.any.isRequired,
};

export default App;
