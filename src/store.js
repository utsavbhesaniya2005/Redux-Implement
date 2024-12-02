import { createStore } from 'redux';
import myApp from './services/reducers/index';

const store = createStore(myApp);

export default store;