import { combineReducers } from "redux";
import studentsReducer from "./reducer";

const rootReducer=combineReducers({
    data:studentsReducer,
})


export default rootReducer;