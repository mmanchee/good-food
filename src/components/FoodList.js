import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFireStroeConnect, isLoaded } from 'react-redux-firebase';

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
            category={food.category}
            subCategory={food.subCategory}
            description={food.description}
            fdcid={food.fcdid}
            id={food.id}
            key={food.id} />
        })}
      </React.Fragment>
    )
  }
}
