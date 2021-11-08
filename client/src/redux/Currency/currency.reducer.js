import {
    REQUEST_INITIAL_SUCCESS,
    REQUEST_INITIAL_FAILURE,
    REQUEST_CURRENCY_SUCCESS,
    REQUEST_CURRENCY_FAILURE,
    UPDATE_BASE_AMOUNT
} from './currency.types';

const initialStateCurrency = {
    base: [],
    currenciesContainer: {},
    currenciesDefault: [
        ["GBP","GBP - Pound Sterling"],
        ["CAD","CAD - Canadian Dollar"],
        ["EUR","EUR - Euro"],
        ["JPY","JPY - Japanese Yen"],
        ["CNY","CNY - Chinese Renminbi"],
    ]
}

export const currency = (state=initialStateCurrency,action={}) => {
    switch(action.type) {
        case REQUEST_INITIAL_SUCCESS:
            console.log(`REQ_INIT: ${action.payload.conversionRates}`);
            return Object.assign({},state,{
                base:["USD","USD - United States Dollar",1],currenciesContainer: {
                    [`${action.payload.baseCode}`]:action.payload.conversionRates
                }
            });
        case REQUEST_INITIAL_FAILURE:
            console.log("Unable to get default currency");
            return state;
        case UPDATE_BASE_AMOUNT:
            let base = state.base;
            base[2] = action.payload;
            return Object.assign({},state,{
                base
            })
        case REQUEST_CURRENCY_SUCCESS:
            if (action.payload.newData) {
                const {currency,conversionRates} = action.payload;
                let base = state.base;
                let currenciesContainer = state.currenciesContainer;

                // Update Base
                base[0] = currency[0][0]
                base[1] = currency[0][1]
                // Update currenciesContainer
                currenciesContainer[currency[0][0]] = conversionRates.conversionRates;
                return Object.assign({},state,{
                    base,
                    currenciesContainer
                })
            }
            else {
                const {currency} = action.payload;
                let base = state.base;
                base[0] = currency[0][0]
                base[1] = currency[0][1]
                return Object.assign({},state,{
                    base
                })
            }
        case REQUEST_CURRENCY_FAILURE:
            console.log(`changeBaseCurrency: ${action.payload.error}`);
            return state;
        default: return state;
    }
}