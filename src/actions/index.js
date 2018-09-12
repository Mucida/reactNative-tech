export const selectLibrary = (libraryId) => {
	return { //an object with "type" propertie IS AN ACTION
		type: 'select_library',
		payload: libraryId
	};
};
//the fatarrow function IS THE ACTION CREATOR of redux
//action creators are functions that return actions
//actions are objects that have type propertie defined