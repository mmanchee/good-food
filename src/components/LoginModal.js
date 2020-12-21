import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions';

function LoginModal(props) {

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      this.props.hideModal();
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  onclose() {
    this.props.hideModel();
  }

  render() {
    return (
      <React.Fragment>
        <Modal onClick={this.OnClose}>
          <h1>Sign In</h1>
          <form onSubmit={doSignIn}>
            <input
              type='text'
              name='signinEmail'
              placeholder='email' />
            <input
              type='password'
              name='signinPassword'
              placeholder='Password' />
            <button type='submit'>Sign in</button>
          </form>
        </Modal>
      </React.Fragment>
    )
  }
}

const mapStateToProps = {
  hideModal: () => hideModal(),
};

export default connect(null, mapStateToProps)(LoginModal);