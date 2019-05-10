import axios from 'axios';
export const FETCH_LOADING = 'FETCH_LOADING';
export const FECTED_RESULT = 'FECTED_RESULT';
const baseUrl= 'http://www.omdbapi.com/' 
const fixedParams = {
    i:'tt3896198',
    apikey: 'fa281222'
}
const filterQueryCall = query => {
    return dispatch => {
        dispatch({type:FETCH_LOADING,loading:true})
        axios.get(baseUrl,{
            params: Object.assign(fixedParams,query)
          }).then(response=> {
              dispatch({type:FECTED_RESULT,data:response})
          }).catch(error=>{
            dispatch({type:FETCH_LOADING,loading:false})
          })
      };
}
export default {
    filterQueryCall
}