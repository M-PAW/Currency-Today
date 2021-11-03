import React from 'react'
import {Container, Col, Row} from 'react-bootstrap';
import Currency from '../components/Currency'

const CurrenciesContainer = ({currency, currencyHandler}) => {
    
    return (
        <div className='currencies-container'>
            <Container fluid>
                <Col>
                    <Row><h4>Currencies:</h4></Row>
                    {
                        currency.selectedCurrencies.map((code,idx) => {
                            return (
                                <Currency currency={currency} baseTotal={currency.base[2]} code={code} currencyHandler={currencyHandler} idx={idx} key={idx}/>
                            )
                        })
                    }
                </Col>
            </Container>
        </div>
    )
}

export default CurrenciesContainer
