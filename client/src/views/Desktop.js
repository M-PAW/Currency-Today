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
                <Navigation type={'desktop'} links={['About','Converter']} text={"Currency-Today"}/>
                <Switch>
                    <Route exact path='/' component={About} />
                    <Route path='/converter' component={Converter} />
                </Switch>
            </Router>
        </DesktopContainer>
    )
}

export default Desktop
