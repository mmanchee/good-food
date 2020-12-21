import React, { Component } from 'react';
import ModelRoot from '../ModalRoot';
import FoodControl from './FoodControl';
import Header from './Header';
import Footer from './Footer';
import Signin from "./Signin";
import Signup from './Signup';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { showModal, hideModal } from '../actions/index';
import { ThemeConsumer } from 'styled-components';

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }))
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: ''
    }
    this.closeModal = this.closeModal.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.openAlertModal = this.openAlertModal.bind(this);     // <-- new modal
    this.openConfirmModal = this.openConfirmModal.bind(this); // <-- new modal
    this.openDeleteModal = this.openDeleteModal.bind(this);   // <-- new modal
    this.openPromptModal = this.openPromptModal.bind(this);   // <-- new modal
    this.showInput = this.showInput.bind(this);
  }
  closeModal() {
    this.props.hideModal()
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
}
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <div id="spacing">
            <FoodControl />
          </div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
