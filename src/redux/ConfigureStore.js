import {createStore, combineReducers} from 'redux';
import {Trips} from './trips.js';
import {cities} from './cities.js';

export const ConfigureStore =() => {
	const store = createStore(
		combineReducers({
			trips: Trips,
			cities: cities,
		})
		);
	return store;
}