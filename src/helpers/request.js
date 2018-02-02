import { saveCategories } from '../actions'

function makeRequestURL(url) {
  return fetch(url)
}

export const fetchCategories = (url) => {
  return function (dispatch) {
    return makeRequestURL(url)
      .then(
      response => {
        return response.json();
      })
      .then((res) => {
        console.log(res)
        dispatch(saveCategories(res))
      })
  };
}