import axios from 'axios';
const baseUrl = 'http://pokeapi.co/api/v2/';

let service = {
	get: function(url) {
		return axios.get(`${baseUrl}${url}`)
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
	}
}

export {service};
