import FoodListReducer from './food-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  masterFoodList: ticketListReducer,
  firestore: firestoreReducer
});

export default rootReducer;