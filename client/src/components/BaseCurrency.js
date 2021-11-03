import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';

const BaseCurrency = (props,{currency,baseHandler,updateAmount}) => {
    const [base,setBase] = useState([
        "AUD","Australian Dollar",1
    ])
    useEffect(() => {
        console.log(base);
    },[base])

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = e.target.sum.value;
        updateAmount(value)
    }

    const changeHandler = (e) => {
        const symbol = e.target.value;
        let currency = props.supportedCodes.filter(code => {
            if (code[0]===symbol) {
                return code[1]
            }
        })
        let update = [currency[0][0],currency[0][1],base[2]]
        setBase(update)
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
        supportedCodes:state.session.supportedCodes
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BaseCurrency);
