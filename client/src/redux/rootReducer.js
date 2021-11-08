import { combineReducers } from "redux";
import { session } from './Session/session.reducer';
import { currency } from "./Currency/currency.reducer";
export const rootReducer = combineReducers({
    session:session,
    currency:currency
});