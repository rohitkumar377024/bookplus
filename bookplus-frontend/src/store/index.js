import {createStore} from 'redux';
import mainReducer from './reducers/main';

// const store = createStore(rootReducer);
const store = createStore(mainReducer);

export default store;
