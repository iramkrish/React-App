import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {

  render() {
    return (
      <Form history={this.props.history} tagline={'Login'} label1={'username'} label2={'password'}></Form>
    );
  }

}

class Form extends Component {

  goToUserPage = (event) => {
      event.preventDefault();
      const username = this.refs.username.value.toLowerCase();
      const password = this.refs.password.value;
      if(username === 'shaadi' && password === '123'){

        if(localStorage.key(username) !== username){
          localStorage.setItem(username,'');
        }
        this.props.history.push('/user/'+username);

      }
      else{
        alert('username:shaadi,password:123');
      }
  }


  render() {
    return (

      <div id="app_root">
        <form onSubmit={this.goToUserPage.bind(this)} className="row login-form" name="myForm">
          <h1>{this.props.tagline}</h1>
          <label>{this.props.label1}:</label>
          <input type="text" ref={this.props.label1} name={this.props.label1} required/>
          <label>{this.props.label2}:</label>
          <input type="password" ref={this.props.label2} name={this.props.label2} required/>
          <button className="button-signin" type="submit" value="Sign In">Sign In</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  tagline: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired
}

Form.defaultProps = {
  tagline: 'Login',
  label1:'Username',
  label2:'Password'
}

export default App;
