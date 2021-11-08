import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';
import { updateBaseAmount, changeBaseCurrency} from '../redux/Currency/currency.actions';

const BaseCurrency = (props) => {
    const [base,setBase] = useState([
        props.base[0],
        props.base[1],
        props.base[2]
    ])
    useEffect(() => {
        //console.log(base);
    },[base])

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = e.target.sum.value;
        console.log(value);
        props.updateBaseAMount(value)
    }

    const changeHandler = (e) => {
        const symbol = e.target.value;
        let currency = props.supportedCodes.filter(code => {
            if (code[0]===symbol) {
                return code
            }
        })
        let update = [currency[0][0],currency[0][1],base[2]]
        let status = props.currenciesContainer[symbol]===undefined?true:false;
        setBase(update)
        props.changeBaseCurrency(currency,status)
    }

    return (
        <div className='baseCurrency-container'>
            <h3>Base Currency</h3>
            <form onSubmit={handleSubmit}>
                <select value='baseCurrency' onChange={changeHandler}>
                <option value={base[0]}>{base[1]}</option> 
                        {
                            props.supportedCodes.map((code,idx) => {
                                return <option value={code[0]} key={idx}>{code[1]}</option> 
                            })
                        }
                </select>
                <input type="number" name="sum" placeholder={base[2]}/>
                <input className='btn btn-secondary' type="submit" value="Convert"/>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        supportedCodes:state.session.supportedCodes,
        base:state.currency.base,
        currenciesContainer:state.currency.currenciesContainer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateBaseAMount:(value) => dispatch(updateBaseAmount(value)),
        changeBaseCurrency:(currency,status) => dispatch(changeBaseCurrency(currency,status))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BaseCurrency);
