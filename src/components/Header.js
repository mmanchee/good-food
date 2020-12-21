import React from "react";
import { useHistory } from 'react-router-dom';

function Header(){

  showLoginMenu() {
    this.props.showModal(LOGIN_MODAL);
  }
  const history = useHistory();
  return (
    <React.Fragment>
      <div id="header"> 
        <p id="header-title">Good Food</p>
      </div>
      <button onClick={this.props.showLoginMenu}>Login</button>
      <button onClick={history.push('/home')}>Home</button>
    </React.Fragment>
    
  );
}

export default Header;