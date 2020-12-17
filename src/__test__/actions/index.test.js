import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('foodList reducer actions', () => {
  it('requestFoods should create REQUEST_FOODS action', () => {
    expect(actions.requestFoods()).toEqual({
      type: c.REQUEST_FOODS
    });
  });

});