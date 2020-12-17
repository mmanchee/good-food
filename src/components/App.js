import React from 'react';
import FoodControl from './FoodControl';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <div className="contain">
        <Header />
        <div id="spacing">
          <FoodControl />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
