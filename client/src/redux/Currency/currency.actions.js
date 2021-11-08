import axios from 'axios';
import {
    REQUEST_INITIAL_SUCCESS,
    REQUEST_INITIAL_FAILURE,
    REQUEST_CURRENCY_SUCCESS,
    REQUEST_CURRENCY_FAILURE,
    UPDATE_BASE_AMOUNT
} from './currency.types';

// access sessionId to pass for endpoint access
const sessionId = window.localStorage.getItem("CT_SESSION")

export const getDefaultCurrency = () => dispatch => {
    axios
    .post('http://localhost:5500/currency/', {
        sessionId:sessionId
    })
    .then(data => {
        console.log(`getDefaultCurrenct: ${data.data["conversion_rates"]}`);
        dispatch({
            type:REQUEST_INITIAL_SUCCESS, 
            payload:{
                baseCode:data.data["base_code"],
                conversionRates:data.data["conversion_rates"]
            }
        })
    })
    .catch(err => dispatch({type:REQUEST_INITIAL_FAILURE}))
}

export const updateBaseAmount = (amount) => dispatch => {
    dispatch({
        type:UPDATE_BASE_AMOUNT,
        payload:Number(amount)
    })
}

export const changeBaseCurrency = (currency,status) => dispatch => {
    if (status){
        axios
        .post('http://localhost:5500/currency/new', {
            sessionId:sessionId,
            currency:currency[0]
        })
        .then(data => {
            dispatch({
                type:REQUEST_CURRENCY_SUCCESS,
                payload:{
                    currency:currency,
                    conversionRates:data.data,
                    newData:true
                }
            })
        })
        .catch(err => {
            dispatch({
                type: REQUEST_CURRENCY_FAILURE,
                payload: {
                    error: err
                }
            })
        })
    }
    // Update Currency without Fetch if status is not undefined
    else {
        dispatch({
            type:REQUEST_CURRENCY_SUCCESS,
            payload:{
                currency:currency,
                newData: false
            }
        })
    }
}
