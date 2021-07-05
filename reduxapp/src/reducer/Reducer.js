import { START_DOWNLOAD, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/action';

const initialState = {
    data: {}
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_DOWNLOAD:
          return {
            ...state,
          };
        case FETCH_SUCCESS:
          return {
            ...state,
            data: action.payload
          };
        case FETCH_FAILURE:
          return {
            ...state,
          };
        default:
          return state;
      }
  };
  
  export default Reducer;
  