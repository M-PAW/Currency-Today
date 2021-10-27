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
        <form style={{width:'90%',margin:"0 auto", display:"flex", justifyContent:"flex-start"}} onSubmit={handleSubmit}>
            <select style={{width:'65%',marginRight:"10px"}} value='baseCurrency' onChange={baseHandler}>
            <option value={base[0]}>{base[1]}</option> 
            <hr />
                    {
                        currency.supportedCodes.map((code,idx) => {
                            return <option value={code[0]}>{code[1]}</option> 
                        })
                    }
            </select>
            <input type="number" name="sum" style={{width:'18%',height:'2rem'}} placeholder={base[2]}/>
            <input type="submit" value="Convert"/>
        </form>
    )
}

export default BaseCurrency
