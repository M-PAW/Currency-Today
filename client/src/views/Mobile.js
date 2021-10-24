import React from 'react'
import MobileContainer from '../containers/styled-components/MobileContainer'
import Navigation from '../components/Navigation'

const Mobile = () => {
    return (
        <MobileContainer>
            <Navigation type={'mobile'} links={['1','2','3']} />
            <h1>Mobile View</h1>
        </MobileContainer>
    )
}

export default Mobile
