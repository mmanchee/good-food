import * as c from './ActionTypes';

export const requestFoods = () => ({
  type: c.REQUEST_FOODS
});

export const getFoodsSuccess = (masterFoodList) => ({
  type: c.GET_FOODS_SUCCESS,
  masterFoodList
});

export const getFoodsFailure = (error) => ({
  type: c.GET_FOODS_FAILURE,
  error
});