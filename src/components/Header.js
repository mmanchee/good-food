import React from "react";
import { useHistory } from 'react-router-dom';

function Header(){

  const history = useHistory();
  return (
    <React.Fragment>
      <div id="header"> 
        <p id="header-title">Good Food</p>
      </div>
      <button onClick={history.push('/home')}>Home</button>
    </React.Fragment>
    
  );
}

export default Header;