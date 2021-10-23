import React, {lazy, Suspense} from 'react';
import MediaQuery from 'react-responsive'
const Desktop = lazy(() => import('../views/Desktop'));
const Mobile = lazy(() => import('../views/Mobile'));

function Main() {
  const mobile = 990;
  const desktop = 991
  return (
    <div>
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

export default Main;
