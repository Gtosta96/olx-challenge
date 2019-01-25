import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import ProductContainer from './product/ProductContainer';
import ShowcaseContainer from './showcase/ShowcaseContainer';

// Exporting for testing purposes
export const App = () => (
  <Container fluid>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/list" />
        <Route path="/list" exact component={ShowcaseContainer} />
        <Route path="/list/:itemId" exact component={ProductContainer} />
      </Switch>
    </Router>
  </Container>
);

export default React.memo(App);
