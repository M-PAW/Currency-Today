import { combineReducers } from "redux";
import { session } from './Session/session.reducers';
export const rootReducer = combineReducers({
    session:session
});