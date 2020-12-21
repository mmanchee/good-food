import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFireStroeConnect, isLoaded } from 'react-redux-firebase';
import Food from './Food';

function FoodList(props) {
  useFireStroeConnect([
    { collection: 'foods' }
  ]);

  const foods = useSelector(state => state.firestore.ordered.foods);

  if ( isLoaded(foods)) {
    return (
      <React.Fragment>
        {foods.map((food) => {
          return <Food 
            whenFoodClicked = { props.onFoodSelection }
            name={food.name}
            description={food.description}
            id={food.id}
            key={food.id} />
        })}
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <p>Loading...</p>
      </React.Fragment>
    )
  }
}

FoodList.propTypes = {
  onFoodSelection: PropTypes.func
}

export default FoodList;