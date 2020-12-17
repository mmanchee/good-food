import React from "react";
import firebase from "firebase/app";
import { withRouter, useHistory } from 'react-router-dom';

function SignIn(){
  const history = useHistory();
  
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      history.push('/')
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default withRouter(SignIn)
