import React,{useEffect,useState} from 'react';

const Currency = ({currency,baseTotal,code,currencyHandler,idx}) => {
    const [currValue, setCurrValue] = useState([
        code[0],code[1], currency.table[code[0]]*currency.base[2]
    ])
    const [isConverting, setIsConverting] = useState(false)
    const converting = () => {
        setIsConverting(true);
        let update = currValue;
        update[2] = parseFloat(currency.base[2] * currency.table[currValue[0]]).toFixed(2)
        setCurrValue(update)
        setTimeout(() => {setIsConverting(false)}, 575)
    }
    // watch value, reevaluate currency
    useEffect(() => {
        converting()
    },[currValue[0]])

    // watch currency.base, reevaluate currency
    useEffect(() => {
        converting()
    },[currency.base[2]])

    // onChange handler
    const changeHandler = (e) => {
        e.preventDefault();
        const selection = e.target.value;
        const newCurr = currency.supportedCodes.find(code => {
            if(code[0]===selection)return code
        })
        setCurrValue(newCurr);
        console.log(e.target.value);
    }
    

    return (
        <div style={{display:"flex",justifyContent:"flex-start", margin:"8px 0 8px 0", height:"2.2rem"}}>
            <select style={{width:'65%', height:"2rem"}} value='baseCurrency' onChange={changeHandler}>
            <option value={currValue[0]}>{currValue[1]}</option> 
            <hr />
                {
                    currency.supportedCodes.map((code,idx) => {
                        return <option value={code[0]}>{code[1]}</option> 
                    })
                }
            </select>
            <div style={{display:"flex", justifyContent: "flex-start", alignItems:"flex-start",alignContent:"center", width:"25%", marginLeft:"10%"}}>
                {
                    isConverting?<>
                    <p>Converting</p>
                    </>:<p style={{fontSize:"1.4rem"}}>{`${currValue[2]}`}</p>

                }
            </div>
        </div>

    )
}

export default Currency
