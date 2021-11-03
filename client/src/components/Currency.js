import React,{useEffect,useState} from 'react';
import {Row, Col} from 'react-bootstrap';

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
        setTimeout(() => {setIsConverting(false)}, 450)
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
        <Row>
            <Col lg={8} xs={4}>
                <select className='currency-select' value='baseCurrency' onChange={changeHandler}>
                    <option value={currValue[0]}>{currValue[1]}</option> 
                    <hr />
                        {
                            currency.supportedCodes.map((code,idx) => {
                                return <option value={code[0]} key={idx}>{code[1]}</option> 
                            })
                        }
                </select>
            </Col>
            <Col lg={4} xs={8}>
                <div className='currency-total'>
                    {
                        isConverting?<>
                        <p>Converting...</p>
                        </>:<p>{`${currValue[2]}`}</p>

                    }
                </div>
            </Col>
        </Row>
    )
}

export default Currency
