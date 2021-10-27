import React from 'react'
import Currency from '../components/Currency'

const CurrenciesContainer = ({currency, currencyHandler}) => {
    
    return (
        <form style={{width:'90%',margin:"0 auto", display:"flex", flexDirection:"Column", justifyContent:"space-evenly"}}>
            {
                currency.selectedCurrencies.map((code,idx) => {
                    return (
                        <Currency currency={currency} baseTotal={currency.base[2]} code={code} currencyHandler={currencyHandler} idx={idx}/>
                    )
                })
            }
        </form>
    )
}

export default CurrenciesContainer
