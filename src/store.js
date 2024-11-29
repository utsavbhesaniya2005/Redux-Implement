import { createStore } from 'redux';
import myApp from './helper/reducers/index';

const store = createStore(myApp);

export default store;