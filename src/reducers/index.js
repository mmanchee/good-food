import FoodListReducer from './food-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import ModelReducer from './modal-reducer';

const rootReducer = combineReducers({
  masterFoodList: FoodListReducer,
  modalApp: ModelReducer,
  firestore: firestoreReducer
});

export default rootReducer;