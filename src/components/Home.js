import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  return (
    <React.Fragment>
      <img src="../../img/GoodFoodLogo" />
      <button onClick={history.push('/signin')}>Login</button>
      <button onClick={history.push('/signup')}>Register</button>
    </React.Fragment>
  )
}

export default Home;