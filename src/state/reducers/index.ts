import { combineReducers } from "redux";

// Import all reducers
import accountReducer from "./accountReducer";
import footballersReducer from "./footballersReducer";

const reducers = combineReducers({
    account: accountReducer,
    footballers: footballersReducer
})

export default reducers;