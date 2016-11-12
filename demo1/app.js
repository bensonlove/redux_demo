// import { createStore } from 'redux';

var { createStore } = require('redux');


function programLanguage(state = 'JavaScript', action) {
	switch (action.type) {
		case 'IOS':
			return action.language;
		case 'WEB':
			return action.language;
		case 'SNACK':
			return action.language;
		default:
			return state;
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

// 改变内部 state 唯一方法是 dispatch 一个 action。
// 调用dispatch方法时 会调用Reducer即本例中的counter方法 由于store设置了状态变化的通知 所以会打印

store.dispatch({ language: 'None', type: 'default' });
// JavaScript
store.dispatch({ language: 'Swift', type: 'IOS' });
// Swift
store.dispatch({ language: 'Ruby', type: 'WEB' });
// World
store.dispatch({ language: 'Python', type: 'SNACK' });
// Python
