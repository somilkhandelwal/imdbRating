import qs from 'qs';
const urls = {
    movies: (id) => {
        const baseUrl = '/movie';
        // const query = qs.stringify({id}, { addQueryPrefix: true });
        return `${baseUrl}?id=${id}`;
    }
}

export default urls;