import React, {lazy, Suspense, useEffect} from 'react';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive'
import { createSession } from '../redux/Session/session.actions';
const Desktop = lazy(() => import('../views/Desktop'));
const Mobile = lazy(() => import('../views/Mobile'));

const Main = (props) => {
  const mobile = 990;
  const desktop = 991

  useEffect(() => {
    props.createSession()
  },[])

  return (
    <div className='main-container'>
      <Suspense fallback="Still Loading">
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
  console.log(state.session.sessionId)
  return {state};
};

const mapDispatchToProps = dispatch => {
  return {
    createSession: () => dispatch(createSession())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
