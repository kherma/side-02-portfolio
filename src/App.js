import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Styleguide from './Styleguide/Styleguide';
import MainLayout from './components/layout/MainLayout/MainLayout';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/styleguide" component={Styleguide} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
