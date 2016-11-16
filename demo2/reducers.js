/*
 * @Author: Benson
 * @Date:   2016-11-15 23:44:59
 * @Last Modified by:   Benson
 * @Last Modified time: 2016-11-16 22:10:15
 */
var defaultState = 'JavaScript'
module.exports = function(state = defaultState, action) {
	switch (action.type) {
		case 'IOS':
			return state + ' ' + action.language;
		case 'WEB':
			return state + ' ' + action.language;
		case 'SNACK':
			return state + ' ' + action.language;
		default:
			return state;
	}
}