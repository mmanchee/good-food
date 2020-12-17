import foodControlReducer from '../../reducers/food-control-reducer';

describe('foodControlReducer', () => {

  const defaultState = {
    isLoading: false,
    foodList: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(parksReducer(defaultState, {type: null })).toEqual({
      return 
})