import React from 'react';
import {connect} from 'react-redux';
import {Container, Col, Row} from 'react-bootstrap';
import Currency from '../components/Currency'

const CurrenciesContainer = (props) => {

    return (
        <div className='currencies-container'>
            <Container fluid>
                <Col>
                    <Row><h4>Currencies:</h4></Row>
                    {
                        props.currenciesDefault.map((code,idx) => {
                            return (
                                <Currency code={code} idx={idx} key={idx}/>
                            )
                        })
                    }
                </Col>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currenciesDefault: state.currency.currenciesDefault
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CurrenciesContainer)
