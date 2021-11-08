import axios from 'axios';
import {
    REQUEST_CREATE_SESSION_SUCCESS,
    REQUEST_CREATE_SESSION_FAILURE,
    APP_CODE
} from './session.types';

// Pull session for check undefines or create - Implement check later, maybe
// const sessionId = window.localStorage.getItem("CT_SESSION")


export const createSession = () => (dispatch) => {
    axios
    .post('http://localhost:5500/session/create',{
        appCode: APP_CODE
    })
    .then(data => {
        dispatch({type:REQUEST_CREATE_SESSION_SUCCESS, payload: data.data})})
    .catch(err => dispatch({type:REQUEST_CREATE_SESSION_FAILURE}))
}