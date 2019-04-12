import {trips} from '../sharedData/tripsData.js';
import * as ActionTypes from './ActionTypes';


export const Trips = (state = trips, action) => {
	switch (action.type) {

		case ActionTypes.SELECT_DATE:
            console.log('reached');
            return state;

		default:
			return state;
	}
}