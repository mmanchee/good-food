import * as c from './../actions/ActionTypes';

const initialModalState = {
  modalType: null
};

export default function (state = initialModalState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case c.SHOW_MODAL:
      newState.modalType = action.modalType;
      break;
    case c.HIDE_MODAL:
      return initialModalState;
    default: 
      return state;
  }
  return newState;
}