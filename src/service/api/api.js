import axios from 'axios';

const apiGet = (baseUrl, params, onSuccess, onError) => {
  axios.get(baseUrl, {params: params}).then(
    response => onSuccess(response)).catch(
      error => onError(error)
    )
};

export default {
  apiGet
}
