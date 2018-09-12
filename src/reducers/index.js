import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer
});

/*
as the libraries are the datas on our app, we should produce them with reducers
*/