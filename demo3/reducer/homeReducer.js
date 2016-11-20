const defaultState = ['benson'];
module.exports = function(state = defaultState, action) {
	switch (action.type) {
		case 'HOME_ACTION': {
			return {
				data: action.data;
			}
		}
		default: return state;
	}
}