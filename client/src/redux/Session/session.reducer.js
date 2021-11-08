import {
    REQUEST_CREATE_SESSION_SUCCESS,
    REQUEST_CREATE_SESSION_FAILURE,
} from './session.types';

const initialStateSession = {
    count:0,
    supportedCodes: []
}

export const session = (state=initialStateSession, action={})  => {
    switch(action.type) {
        case REQUEST_CREATE_SESSION_SUCCESS:
            window.localStorage.setItem("CT_SESSION",action.payload.sessionId)
            console.log(action.payload.sessionId);
            return Object.assign({},state,{
                count:action.payload.limitCounter,supportedCodes:action.payload.supportedCodes})
        case REQUEST_CREATE_SESSION_FAILURE:
            return state
        default: return state;
    }
}