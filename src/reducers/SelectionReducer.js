export default (state = null, action) => { //to not be undefined at firs time app runs
	switch (action.type) { //isso tem em todos os reducers SEMPRE
		case 'select_library':
			return action.payload;
		default:
			return state;//return whatever was in the last time it was ran
	}
};