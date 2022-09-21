import { combineReducers } from "redux";

// Import all reducers
import accountReducer from "./accountReducer";
import dummyDataReducer from "./dummyDataReducer";

const reducers = combineReducers({
    account: accountReducer,
    dummyData: dummyDataReducer
})

export default reducers;