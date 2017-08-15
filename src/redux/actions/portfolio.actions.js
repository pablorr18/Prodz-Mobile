
import axios from 'axios';
import * as types from './actionTypes';
import config from '../../config';

export function retrievePortfolioList() {
	return function (dispatch) {
		return axios({
			url: config.API_SERVER + '/api/portfolio',
			method: 'get',
			headers:{
				'x-access-token': config.ACCESS_TOKEN
			}
		})
		.then(res => {
			if(res.data.status === 200 && res.data.result===true){
				dispatch(retrievePortfolioSuccess(res.data));
			}
			else{
				console.log('API Error:', 'There was an error with the API server.');
			}
		})
		.catch(error => {
			console.log(error);
		});
	};
}

export function retrievePortfolioSuccess(res) {
	return {
		type: types.RETRIEVE_PORTFOLIO_LIST,
		items: res.response
	};
}