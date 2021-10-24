import React, {lazy} from 'react'
import DesktopContainer from '../containers/styled-components/DesktopContainer'
import Navigation from '../components/Navigation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../components/About';
const Converter = lazy(() => import('../components/Converter'));

const Desktop = () => {
    return (
        <DesktopContainer>
            <Router>
                <Navigation type={'desktop'} links={['About','Converter']}/>
                <h1>Desktop View</h1>
                <Switch>
                    
                </Switch>
            </Router>
        </DesktopContainer>
    )
}

export default Desktop
