import React from 'react'
import { useHistory } from 'react-router-dom';
import Info from './Info';
import Chart from './Chart';
import Diet from './Diet';

function Account() {
    let currentlyVisibleState = null;
    
    
  const history = useHistory();

  function redirect(cURL) {
    switch ( cURL ) {
      case "info":     
        currentlyVisibleState = <Info />;
      case "chart": 
        currentlyVisibleState = <Chart />;
      case "diet":
        currentlyVisibleState = <Diet />;
      default:
        cURL = "";
      }
  }

  return (
    <React.Fragment>
      <div className="account-menu">
        <div className="account-menu-box">
          <p id="account-title">Account Panel</p>
          <button className="main-menu-button" onClick={redirect("info")}>Account Info</button>
          <button className="main-menu-button" onClick={redirect("chart")}>Health Chart</button>
          <button className="main-menu-button" onClick={redirect("diet")}>Diet Plan</button>
        </div>
      </div>
      {currentlyVisibleState}
    </React.Fragment>
  )
}

export default Account;