import * as c from './../actions/ActionTypes';

const initialState = {
  isloading: false,
  masterFoodList: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_FOODS:
      return Object.assign({}, state, {
        isLoading: true
      });
    default:
      return state;
    }
}