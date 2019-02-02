import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.goToUserPage = this.goToUserPage.bind(this);
  }

  goToUserPage = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const { localStorage } = window;
    const username = this.label1.value.toLowerCase();
    const password = this.label2.value;
    if (username === 'shaadi' && password === '123') {
      if (localStorage.key(username) !== username) {
        localStorage.setItem(username, '');
      }
      history.push(`/user/${username}`);
    }
  }

  render() {
    const { tagline, label1, label2 } = this.props;

    return (
      <div id="app_root">
        <form onSubmit={this.goToUserPage} className="row login-form" name="myForm">
          <h1>
            {tagline}
          </h1>
          {/* eslint-disable-next-line jsx-a11y/label-has-for */}
          <label htmlFor={label1}>
            {label1}
              :
          </label>
          <input id={label1} type="text" ref={(input) => { this.label1 = input; }} name={label1} required />
          {/* eslint-disable-next-line jsx-a11y/label-has-for */}
          <label htmlFor={label2}>
            {label2}
              :
          </label>
          <input id={label2} type="password" ref={(input) => { this.label2 = input; }} name={label2} required />
          <button className="button-signin" type="submit" value="Sign In">Sign In</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  history: PropTypes.any.isRequired,
  tagline: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
};

export default Form;
