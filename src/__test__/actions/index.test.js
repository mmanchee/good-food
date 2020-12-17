import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('headline reducer actions', () => {
  it('requestHeadlines should create REQUEST_HEADLINES action', () => {
    expect(actions.requestHeadlines()).toEqual({
      type: c.REQUEST_HEADLINES
    });
  });
  
});