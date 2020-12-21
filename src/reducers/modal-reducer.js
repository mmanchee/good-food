import * as c from './../actions/ActionTypes';

const initialModalState = {
  modalType: null,
  modalProps: {
    open: false
  }
};

export default function (state = initialModalState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case c.SHOW_MODAL:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType,
        type: action.type
      }
    case c.HIDE_MODAL:
      return initialModalState;
    default: 
      return state;
  }
}