import axios from 'axios';

axios.defaults.baseURL = 'http://www.omdbapi.com/';
export default async function searchMoviesAndSeries(type, query) {
	const { data } = await axios.get(`?api_key=83d5d697&${type}=${query}}`);
	console.log(data);
	return data;
}
