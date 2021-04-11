import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// ===========
// Views
// ===========
import MainLayout from './components/layout/MainLayout/MainLayout';
import PersonalData from './components/views/PersonalData/PersonalData';

const Styleguide = lazy(() =>
  import('./components/views/Styleguide/Styleguide')
);
const AdditionalInfo = lazy(() =>
  import('./components/views/AdditionalInfo/AdditionalInfo')
);

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Suspense fallback={<h2>Loading Page...</h2>}>
            <Route exact path="/" component={PersonalData} />
            <Route path="/styleguide" component={Styleguide} />
            <Route path="/additionalinfo" component={AdditionalInfo} />
          </Suspense>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
