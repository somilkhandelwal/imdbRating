 import {FETCH_LOADING,
    FECTED_RESULT} from '../action/apiActions'
 
 const initialState = {
    loading: false, data: null 
 } 
  const glossaryReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case 'FETCH_LOADING':
        newState = {
          ...state,
          loading: action.loading
        };
        return newState;
        case 'FECTED_RESULT':
        newState = {
          ...state,
          loading: false,
          data:action.data
        };
        return newState;
      default:
        return state;
    }
  };
  
  export default glossaryReducer;
  