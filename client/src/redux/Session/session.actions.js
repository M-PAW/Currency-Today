import axios from 'axios';
import {
    REQUEST_CREATE_SESSION_SUCCESS,
    REQUEST_CREATE_SESSION_FAILURE,
    // REQUEST_INITIALIZATION_DATA_SUCCESS,
    // REQUEST_INITIALIZATION_DATA_FAILURE,
    // REQUEST_NEW_CURRENCY_SUCCESS,
    // REQUEST_NEW_CURRENCY_FAILURE,
    // IS_UPDATING,
    APP_CODE
} from './session.types';

export const createSession = () => (dispatch) => {
    console.log(process.env.APP_CODE);
    axios
    .post('http://localhost:5500/test/create',{
        appCode: APP_CODE
    })
    .then(data => {
        dispatch({type:REQUEST_CREATE_SESSION_SUCCESS, payload: data.data})})
    .catch(err => dispatch({type:REQUEST_CREATE_SESSION_FAILURE}))
}