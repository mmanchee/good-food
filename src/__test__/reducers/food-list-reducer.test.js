import foodListReducer from '../../reducers/food-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('FoodListReducer', () => {

  let action;

  const defaultState = {
    isLoading: false,
    masterFoodList: [],
    error: null
  };
  const loadingState = {
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
  test('request foods should successfully change isLoading to true', () => {
    action = {
      type: c.REQUEST_FOODS
    };
    console.log(action);
    expect(foodListReducer(defaultState, action)).toEqual({
      isLoading: true,
      masterFoodList: [],
      error: null
    });
  });
  test('successfully getting foods should change isLoading to false and update foods', () => {
    const foodList = "Peach";
    action = {
      type: c.GET_FOODS_SUCCESS,
      masterFoodList: foodList
    };
    expect(foodListReducer(loadingState, action)).toEqual({
      isLoading: false,
      masterFoodList: "Peach",
      error: null
    });
  }); 
});