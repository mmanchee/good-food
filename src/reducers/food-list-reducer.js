import * as c from './../actions/ActionTypes';

const initialState = {
  isLoading: false,
  masterFoodList: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_FOODS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_FOODS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        masterFoodList: action.masterFoodList
      });
    default:
      return state;
    }
}