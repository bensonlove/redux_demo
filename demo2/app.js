var {
	createStore
} = require('redux');
var lanDesc = require('./reducers');
var homeAction = require('./HomeAction');


let store = createStore(lanDesc);

store.subscribe(() =>
	console.log(store.getState())
);

store.dispatch(homeAction.action_ios('iOS'));
store.dispatch(homeAction.action_web('Web'));
store.dispatch(homeAction.action_snack('Python'));