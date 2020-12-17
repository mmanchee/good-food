import foodListReducer from '../../reducers/food-list-reducer';

describe('FoodListReducer', () => {

  const defaultState = {
    isLoading: false,
    masterFoodList: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(foodListReducer(defaultState, {type: null })).toEqual(
      {
        isLoading: false,
        masterFoodList: [],
        error: null
      }
    );
  });

});