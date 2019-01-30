import React, { Component } from 'react';
import './User.css';
import PropTypes from 'prop-types';


class User extends Component {
    state = {
        user:this.props.match.params.user,
        carousal_count:''
    }

    Carousal_Count = (data) => {
        this.setState({carousal_count:data}, () => {
            document.getElementById('test').innerHTML = '';
                for(var i=1;i<=this.state.carousal_count;i++){
                    var className = (i === Number(this.state.carousal_count)) ? "carousel-item active" : "carousel-item";
                    document.getElementById('test').innerHTML += '<div class="'+className+'"><div class="img"><p>'+i+'</p></div></div>';
                }
            });
    }

    render() {
      return (
        <div id="User_root">
        <div id="modal"></div>
        <Select Carousal_Count={this.Carousal_Count.bind(this)} data={this.state.user}></Select>
        <Carousal send={this.state.user}></Carousal>
        <Finish data={this.state.user}></Finish>
        </div>
      );
    }
  }

class Select extends Component{

      clicked = () => {
        if(this.props.data === localStorage.key(this.props.data)){
        let store = localStorage.getItem(this.props.data);
        store = store !== '' ? (store + "," + this.refs.selected.value) : this.refs.selected.value;
        localStorage.setItem(this.props.data,store);
        this.props.Carousal_Count(this.refs.selected.value);
        }
      }

      render(){
          return(
            <div id="dropdown-container">
            <select ref="selected" className="custom-select" onChange={this.clicked.bind(this)}>
                <option default hidden>select the number of slides in carousal</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
            </div>
          );
      }

  }

  Select.propTypes = {
      Carousal_Count:PropTypes.func.isRequired,
      data : PropTypes.string.isRequired
  }

class Carousal extends Component{

    render(){
        return(
            <div className="row carousal-container">
                <div id="carouselExampleControls" className="carousel" data-ride="carousel">
                    <div id="test" className="carousel-inner">
                    <p className="carousal-text">carousel</p>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

Carousal.propTypes = {
    send : PropTypes.string.isRequired
}


const Modal = ({ handleClose, show, children }) => {
    const show_result = show ? "modal display-block" : "modal display-none";

    return (
      <div className={show_result}>
        <section className="modal-main">
          {children}
          <button className="button-close" onClick={handleClose}>close</button>
        </section>
      </div>
    );
  }

Modal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
}

class Finish extends Component{

    state = {
        show: false,
        localdata:"you are not logged in"
    }

    showModal = (event) => {
      event.preventDefault();
      if(localStorage.key(this.props.data)===this.props.data){
          if(localStorage.getItem(this.props.data))
          this.setState({localdata:localStorage.getItem(this.props.data)});
          else{
              this.setState({localdata:'you haven\'t selected any number'});
          }
      }
      this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    render(){
        return(
            <div id="finishButton">
            <Modal show={this.state.show} handleClose={this.hideModal}>
                <p><span>{this.state.localdata}</span></p>
            </Modal>
            <form onSubmit={this.showModal}>
                <button ref="finish" className="button-signin finish" type="submit" value="Finish">Finish</button>
            </form>
            </div>
        );
    }
}

Finish.propTypes = {
    data : PropTypes.string.isRequired
}

export default User;

