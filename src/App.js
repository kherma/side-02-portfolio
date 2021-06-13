import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// ===========
// Views
// ===========
import MainLayout from './components/layout/MainLayout/MainLayout';

const PersonalData = lazy(() =>
  import(
    /* webpackPrefetch: true */ './components/views/PersonalData/PersonalData'
  )
);

const Styleguide = lazy(() =>
  import(/* webpackPrefetch: true */ './components/views/Styleguide/Styleguide')
);

const AdditionalInfo = lazy(() =>
  import(
    /* webpackPrefetch: true */ './components/views/AdditionalInfo/AdditionalInfo'
  )
);

const ProjectsDir = lazy(() =>
  import(
    /* webpackPrefetch: true */ './components/views/ProjectsDir/ProjectsDir'
  )
);

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<h2>Loading Page...</h2>}>
          <Switch>
            <Route exact path="/" component={PersonalData} />
            <Route path="/styleguide" component={Styleguide} />
            <Route path="/additionalinfo" component={AdditionalInfo} />
            <Route path="/projects" component={ProjectsDir} />
          </Switch>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
