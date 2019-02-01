import React, { Component } from 'react';
import './User.css';
import PropTypes from 'prop-types';
import Finish from './Finish';
import Select from './Select';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousalCountValue: '',
    };
    this.carousalCount = this.carousalCount.bind(this);
  }

    carousalCount = (data) => {
      this.setState({ carousalCountValue: data }, () => {
        const carousalStack = document.getElementById('carousal-stack');
        carousalStack.innerHTML = '';
        const { carousalCountValue } = this.state;
        for (let i = 1; i <= carousalCountValue; i++) {
          const className = (i === Number(carousalCountValue)) ? 'carousel-item active' : 'carousel-item';
          carousalStack.innerHTML += `<div class="${className}"><div class="img"><p>${i}</p></div></div>`;
        }
      });
    }

    render() {
      const { match: { params: { user: username } } } = this.props;
      return (
        <div id="User_root">
          <div id="modal" />
          <Select carousalCount={this.carousalCount} data={username} />
          <Carousal />
          <Finish data={username} />
        </div>
      );
    }
}

User.propTypes = {
  match: PropTypes.any.isRequired,
};

function Carousal() {
  return (
    <div className="row carousal-container">
      <div id="carouselExampleControls" className="carousel" data-ride="carousel">
        <div id="carousal-stack" className="carousel-inner">
          <p className="carousal-text">carousel</p>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default User;
