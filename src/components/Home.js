import React from 'react'
import { useHistory } from 'react-router-dom';

function Home() {

  const history = useHistory();

  function redirect(cURL) {
    switch (cURL) {
      case "food":
        history.push('/foodControl');
        break;
      case "event":
        history.push('/event');
        break;
      case "calendar":
        history.push('/calendar');
        break;
      case "account":
        history.push('/account');
        break;
      default:
        history.push('/');

    }
  }
  return (
    <React.Fragment>
      <div className="center-menu">
        <div className="menu-box">
          <p id="menu-title">Home Panel</p>
          <button className="main-menu-button" onClick={redirect("food")}>Foods</button>
          <button className="main-menu-button" onClick={redirect("event")}>Add Event</button>
          <button className="main-menu-button" onClick={redirect("calendar")}>Calendar</button>
          <button className="main-menu-button" onClick={redirect("account")}>Account</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home;