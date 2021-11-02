import React,{lazy} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MobileContainer from '../containers/styled-components/MobileContainer'
import Navigation from '../components/Navigation'
import {House,Cash} from 'react-bootstrap-icons';
import About from '../components/About';
const Converter = lazy(() => import('../components/Converter'));

const Mobile = () => {
    return (
        <MobileContainer>
            <Router>
                <Navigation type={'mobile-top'} text={'Currency-Today'} />
                <Switch>
                    <Route exact path='/' component={About} />
                    <Route path='/converter'>
                        <Converter type={'mobile'} />
                    </Route>
                </Switch>
                <Navigation type={'mobile-bottom'} links={['About','Converter']} icons={[House,Cash]} />
            </Router>
        </MobileContainer>
    )
}

export default Mobile
