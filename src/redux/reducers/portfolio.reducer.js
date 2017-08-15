import * as types from '../actions/actionTypes';

const initialState = {
	items:[]
};

export default function (state = initialState, action) {
	switch (action.type) {

		case types.RETRIEVE_PORTFOLIO_LIST:
			return {
				...state,
				items: action.items
			};

		default:
			return state;
	}
}
