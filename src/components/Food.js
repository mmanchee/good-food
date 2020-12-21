import React from 'react';
import PropTypes from 'prop-types';

function Food(props) {
  return (
    <React.Fragment>
      <p>Name: {props.name}</p>
      <p>Description: {props.description}</p>
      <button onClick = {() => props.whenFoodClicked(props.id)}>Info</button>
    </React.Fragment>
  );
}

Food.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  whenFoodClicked: PropTypes.func
};

export default Food;