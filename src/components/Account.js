import React from 'react'
import { useHistory } from 'react-router-dom';

function Home() {

  const history = useHistory();

  let accountPage = "";

  function redirect(cURL) {
    accountPage = cURL;

  }
  render () {
    let currentlyVisibleState = null;
    
    switch (accountPage ) {
      case "info":     
        currentlyVisibleState = <Info />;
      case "chart": 
        currentlyVisibleState = <Chart />;
      case "diet":
        currentlyVisibleState = <Diet />;
      default:
        accountPage = "";
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
  
}

export default Home;