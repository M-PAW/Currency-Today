import {
    REQUEST_CREATE_SESSION_SUCCESS,
    REQUEST_CREATE_SESSION_FAILURE,
    // REQUEST_INITIALIZATION_DATA_SUCCESS,
    // REQUEST_INITIALIZATION_DATA_FAILURE,
    // REQUEST_NEW_CURRENCY_SUCCESS,
    // REQUEST_NEW_CURRENCY_FAILURE,
    // IS_UPDATING
} from './session.types';

const initialStateSession = {
    sessionId:'',
    count:0,
    supportedCodes: []
}

export const session = (state=initialStateSession, action={}) => {
    switch(action.type) {
        case REQUEST_CREATE_SESSION_SUCCESS:
            return Object.assign({},state,{sessionId:action.payload.sessionId,count:action.payload.limitCounter,supportedCodes:action.payload.supportedCodes})
        case REQUEST_CREATE_SESSION_FAILURE:
            console.log('Unable to create new session.')
            break;
        default: return state;
    }
}