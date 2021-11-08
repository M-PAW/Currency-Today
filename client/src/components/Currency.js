import React,{useEffect,useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

const Currency = (props) => {
    const {supportedCodes,currenciesContainer,base} = useSelector(state => ({
        supportedCodes:state.session.supportedCodes,
        currenciesContainer:state.currency.currenciesContainer,
        base:state.currency.base
    }))

    const [currValue, setCurrValue] = useState([
        props.code[0],
        props.code[1],
        parseFloat(base[2] * currenciesContainer[base[0]][props.code[0]]).toFixed(2)
    ])
    const [isConverting, setIsConverting] = useState(false)
    const converting = () => {
        setIsConverting(true);
        let update = currValue;
        update[2] = parseFloat(base[2] * currenciesContainer[base[0]][currValue[0]]).toFixed(2)
        setCurrValue(update)
        setTimeout(() => {setIsConverting(false)}, 250)
    }
    // watch value, reevaluate currency
    useEffect(() => {
        converting()
    },[base[0]])

    useEffect(() => {
        converting()
    },[currValue[0]])

    // watch currency.base, reevaluate currency
    useEffect(() => {
        converting()
    },[base[2]])

    // onChange handler
    const changeHandler = (e) => {
        e.preventDefault();
        const selection = e.target.value;
        const newCurr = supportedCodes.find(code => {
            if(code[0]===selection)return code
        })
        newCurr.length<3&&newCurr.push(1)
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
                            supportedCodes.map((code,idx) => {
                                return <option value={code[0]} key={idx}>{code[1]}</option> 
                            })
                        }
                </select>
            </Col>
            <Col lg={4} xs={8}>
                <div className='currency-total'>
                    {
                        isConverting?<>
                        <p>Updating...</p>
                        </>:<p>{`${currValue[2]}`}</p>

                    }
                </div>
            </Col>
        </Row>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         state
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//     }
// }

export default Currency;
