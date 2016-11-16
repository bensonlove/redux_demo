// import { createStore } from 'redux';

var { createStore } = require('redux');


var defaultState = 'JavaScript'
function programLanguage(state = defaultState, action) {
	switch (action.type) {
		case 'IOS':
			return state + ' ' +action.language;
		case 'WEB':
			return state + ' ' +action.language;
		case 'SNACK':
			return state + ' ' +action.language;
		default: return state;
	}
}

// 创建 Redux store 来存放应用的状态。
// createStore(reducer, preloadedState, enhancer)
let store = createStore(programLanguage);
// let store = createStore(counter);

// 可以手动订阅状态的变化更新
store.subscribe(() =>
	console.log(store.getState())
);

store.dispatch({ type: 'default' });
// JavaScript
store.dispatch({ language: 'Swift', type: 'IOS' });
// Swift
store.dispatch({ language: 'Ruby', type: 'WEB' });
// World
store.dispatch({ language: 'Python', type: 'SNACK' });
// Python
