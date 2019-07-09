import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer'; // radi

export default combineReducers({
    libraries: LibraryReducer
});
//Should look like this
//Returns the list of data
// { libraries: [ {id: 1, title: 'webpack' ....}]}