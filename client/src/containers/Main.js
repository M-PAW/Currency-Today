import React, {lazy, Suspense, useEffect} from 'react';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive'
import { getDefaultCurrency } from '../redux/Currency/currency.actions';
import { createSession } from '../redux/Session/session.actions';
import Loader from '../components/Loader';
const Desktop = lazy(() => import('../views/Desktop'));
const Mobile = lazy(() => import('../views/Mobile'));

const Main = (props) => {
  const mobile = 990;
  const desktop = 991
  useEffect(() => {
    props.createSession()
    setTimeout(props.getDefaultCurrency()
    ,500)
  },[])

  return (
    <div className='main-container'>
      <Suspense fallback={<Loader />}>
        <MediaQuery minWidth={desktop}>
          <Desktop />
        </MediaQuery>
        <MediaQuery maxWidth={mobile}>
          <Mobile />
        </MediaQuery>
      </Suspense>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {state};
};

const mapDispatchToProps = dispatch => {
  return {
    createSession: () => dispatch(createSession()),
    getDefaultCurrency: () => dispatch(getDefaultCurrency())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
