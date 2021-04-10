import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Styleguide from './Styleguide/Styleguide';
import MainLayout from './components/layout/MainLayout/MainLayout';

// ===========
// Views
// ===========
import PersonalData from './components/views/PersonalData/PersonalData';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Redirect exact from="/" to="/personaldata" />
          <Route path="/personaldata" component={PersonalData} />
          <Route path="/styleguide" component={Styleguide} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
