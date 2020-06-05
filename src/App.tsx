import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Layout from './components/Layout';
import Spinner from './components/Spinner';

const Home = lazy(() => import('./containers/Home'));
const ChooseSize = lazy(() => import('./containers/ChooseSize'));
const ChooseCrust = lazy(() => import('./containers/ChooseCrust'));
const ChooseToppings = lazy(() => import('./containers/ChooseToppings'));
const Confirm = lazy(() => import('./containers/Confirm'));

export const App: React.FC = (): JSX.Element => (
  <Router>
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/choose-size" component={ChooseSize} />
          <Route path="/choose-crust" component={ChooseCrust} />
          <Route path="/choose-toppings" component={ChooseToppings} />
          <Route path="/confirm" component={Confirm} />
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </Layout>
  </Router>
);