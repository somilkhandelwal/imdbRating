import api from '../../service/api/api'
export const FETCH_LOADING = 'FETCH_LOADING';
export const FECTED_RESULT = 'FECTED_RESULT';
const baseUrl = 'http://www.omdbapi.com/'
const fixedParams = {
    apikey: 'fa281222'
}

const filterQueryCall = query => {
    return dispatch => {
        dispatch({ type: FETCH_LOADING, loading: true })
        api.apiGet(baseUrl, Object.assign(fixedParams, query),
            data => dispatch({ type: FECTED_RESULT, data }),
            error => dispatch({ type: FETCH_LOADING, loading: false })
        )
    };
}
export default {
    filterQueryCall
}