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

export const showModal = (modalType) => ({
  type: c.SHOW_MODAL,
  //modalProps,
  modalType
});

export const hideModal = () => ({
  type: c.HIDE_MODAL
});

export  const  makeApiCall = (param, input) => {
  const ApiURL = "http://localhost:5003/api/";
  let request = "";
  let cURL = "";
  if (param === 'foods') {
    cURL = `${ApiURL}Foods`;
    request = {
      // method: `${param}`,
      headers: { 'accept': '*/*', 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`}
    }
  }
  if (param === 'id') {
    cURL = `${ApiURL}Foods/${input}`;
    request = {
      method: `${param}`,
      headers: { 'accept': 'text/plain', 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`}
    }
  }
  if (param === 'foodList') {
    cURL = `${ApiURL}Foods/FoodList?${input}`
    request = {
      headers: { 'accept': '*/*', 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`}
    }
  }
  if (param === 'search') {
    cURL = `${ApiURL}Foods/search?${input}`
    request = {
      headers: { 'accept': '*/*', 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`}
    }
  }
  return dispatch => {
    dispatch(requestFoods);
    return fetch(cURL, request)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getFoodsSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(getFoodsFailure(error));
      });
  }
}