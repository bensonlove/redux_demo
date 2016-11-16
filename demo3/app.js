/*
 * @Author: Benson
 * @Date:   2016-11-16 22:25:37
 * @Last Modified by:   Benson
 * @Last Modified time: 2016-11-16 22:54:34
 */

var {
	createStore,
	combineReducers
} = require('redux');

var homeAction = require('./action/homeAction');
var profileAction = require('./action/profileAction');

var homeReducer = require('./reducer/homeReducer');
var profileReducer = require('./reducer/profileReducer');

const mainReducer = combineReducers({
	homeReducer,
	profileReducer
})
let store = createStore(mainReducer);

store.subscribe(() =>
	console.log(store.getState())
);

store.dispatch(homeAction(['a', 'b', 'c', 'd']));
store.dispatch(profileAction([1, 2, 3, 4]));