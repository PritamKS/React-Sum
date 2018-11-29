import {createStore} from 'redux';
import reducer from './addReducer'; 
const store = createStore(reducer);
export default store;