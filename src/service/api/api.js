import axios from 'axios';

const apiGet = (baseUrl, params, onSuccess, onError) => {
  axios.get(baseUrl, {params: params}).then(
    response => onSuccess(response)).catch(
      error => onError(error)
    )
};
const apiPost = (baseUrl, params, onSuccess, onError) => {
  axios.post(baseUrl, {params: params}).then(
    response => onSuccess(response)).catch(
      error => onError(error)
    )
};

export default {
  apiPost,
  apiGet
}
