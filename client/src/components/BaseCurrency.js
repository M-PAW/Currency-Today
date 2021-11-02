import React,{useState,useEffect} from 'react'

const BaseCurrency = ({currency,baseHandler,updateAmount}) => {
    const [base,setBase] = useState(currency.base)
    useEffect(() => {
        setBase(currency.base)
    },[currency.base])

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = e.target.sum.value;
        updateAmount(value)
    }

    return (
        <div className='baseCurrency-container'>
            <h3>Base Currency</h3>
            <form onSubmit={handleSubmit}>
                <select value='baseCurrency' onChange={baseHandler}>
                <option value={base[0]}>{base[1]}</option> 
                <hr />
                        {
                            currency.supportedCodes.map((code,idx) => {
                                return <option value={code[0]}>{code[1]}</option> 
                            })
                        }
                </select>
                <input type="number" name="sum" placeholder={base[2]}/>
                <input className='btn btn-secondary' type="submit" value="Convert"/>
            </form>
        </div>
    )
}

export default BaseCurrency
