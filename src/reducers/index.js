import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
	libraries: LibraryReducer
});

/*
as the libries are the datas on our app, we should produce them with reducers
*/