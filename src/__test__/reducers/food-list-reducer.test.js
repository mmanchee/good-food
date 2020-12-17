import foodListReducer from '../../reducers/food-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('FoodListReducer', () => {

  let action;

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
  test('request foods should successfully cahnge isLoading to true', () => {
    action = {
      type: c.REQUEST_FOODS
    };
    expect(foodListReducer(defaultState, action)).toEqual({
      isLoading: true,
      masterFoodList: [],
      error: null
    });
  });
  
});