import React,{useState,useEffect} from 'react';
import BaseCurrency from './BaseCurrency';
import CurrenciesContainer from '../containers/CurrenciesContainer';

const Converter = () => {
    const [currency,setCurrency] = useState({
        base: ["AUD", "AUD - Australian Dollar",1],
        table : {
            "AUD": 1,
            "AED": 2.7501,
            "AFN": 59.9041,
            "ALL": 78.2255,
            },
        selectedCurrencies: [
            ["AED","AED - The United Arab Emirates Dirham"],
            ["AFN","AFN - The afghani"],
            ["ALL","ALL - Albania Lek"]
        ],
        supportedCodes: [
            ["AUD","AUD - Australian Dollar"],
            ["AED","AED - The United Arab Emirates Dirham"],
            ["AFN","AFN - The afghani"],
            ["ALL","ALL - Albania Lek"]
        ],
    })

    const baseHandler = (e) => {
        const update = currency.supportedCodes.filter(code => e.target.value === code[0])
        update[0][2] === undefined && update[0].push(currency.base[2])
        console.log(update);
        setCurrency({...currency,base: update[0]});
    }

    const updateAmount = (n) => {
        let update = currency.base;
        update[2] = n;
        setCurrency({...currency,base:update});
        console.log(`base: ${currency.base}`);
    }

    const currencyHandler = (newCode,idx) => {
        console.log(`code: ${newCode}, idx: ${idx}`);
        let update = currency.supportedCodes.filter(fCode => fCode[0]===newCode)
        let sCurrencies = currency.selectedCurrencies;
        sCurrencies[idx] = update[0]
        setCurrency({...currency,selectedCurrencies:sCurrencies})
        console.log(currency.selectedCurrencies);
        // const update = currency.selectedCurrencies;
        // update[0][idx] = code;
        // setCurrency({selectedCurrencies: update})
    }

    return (
        <div style={{width:"90%", display:"flex",flexDirection:"column", justifyContent:"center"}}>
            <BaseCurrency currency={currency} baseHandler={baseHandler} updateAmount={updateAmount}/>
            <hr />
            <h1>Converter Component</h1>
            <CurrenciesContainer currency={currency} currencyHandler={currencyHandler} />
        </div>
    )
}

export default Converter
