import axios from "axios";

export const START_DOWNLOAD = "START_DOWNLOAD";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const downloadApi = () => dispatch => {
    // action objects
    dispatch({ type: START_DOWNLOAD });
    // do some async action and dispatch an error or success action
    axios
      .get(
        "https://rickandmortyapi.com/api/character"
      )
      .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data.results }))
      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
  };