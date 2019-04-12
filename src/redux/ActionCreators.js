import * as ActionTypes from './ActionTypes';

export const updateTrips = (selectedDate) => ({
	type: ActionTypes.SELECT_DATE,
	payload:{
		selectedDate: selectedDate,
	}
})