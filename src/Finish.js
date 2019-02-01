import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ handleClose, show, children }) => {
  const showResult = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showResult}>
      <section className="modal-main">
        {children}
        <button type="button" className="button-close" onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

class Finish extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      localdata: 'you are not logged in',
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

    showModal = (event) => {
      const { data } = this.props;
      const { localStorage } = window;
      if (localStorage.key(data) === data) {
        if (localStorage.getItem(data)) {
          this.setState({ localdata: localStorage.getItem(data) });
        } else {
          this.setState({ localdata: 'you haven\'t selected any number' });
        }
      }
      this.setState({ show: true });
      event.preventDefault();
    }

    hideModal = () => {
      this.setState({ show: false });
    }

    render() {
      const { show, localdata } = this.state;
      return (
        <div id="finishButton">
          <Modal show={show} handleClose={this.hideModal}>
            <p><span>{localdata}</span></p>
          </Modal>
          <form onSubmit={this.showModal}>
            <button className="button-signin finish" type="submit" value="Finish">Finish</button>
          </form>
        </div>
      );
    }
}

Finish.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Finish;
