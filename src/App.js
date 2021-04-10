import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// ===========
// Views
// ===========
import MainLayout from './components/layout/MainLayout/MainLayout';
import PersonalData from './components/views/PersonalData/PersonalData';
// import Styleguide from './Styleguide/Styleguide';

const Styleguide = lazy(() => import('./Styleguide/Styleguide'));

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Suspense fallback={<h2>Loading Page...</h2>}>
            <Redirect exact from="/" to="/personaldata" />
            <Route path="/personaldata" component={PersonalData} />
            <Route path="/styleguide" component={Styleguide} />
          </Suspense>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
