import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";

const myApp = combineReducers({
    CounterReducer
})

export default myApp;