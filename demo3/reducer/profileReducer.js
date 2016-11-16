const defaultState = [0];
module.exports = function(state = defaultState, action) {
	switch (action.type) {
		case 'PROFILE_ACTION': {
			return {
				data: action.data
			}
		}
		default: return state;
	}

}