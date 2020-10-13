import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import StartPage from './pages/start/StartPage';
import HomePage from './pages/home/HomePage';
import HiddenToolbar from './utils/HiddenToolbar';

const routes = [
  { path: '/start', name: 'Start', Component: StartPage },
  { path: '/', name: 'Home', Component: HomePage },
];

export default function App() {
  return (
    <Router>
      <HiddenToolbar />
      <TransitionGroup>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path}>
              {({ match }) => match && <Component />}
            </Route>
          ))}
        </Switch>
      </TransitionGroup>
    </Router>
  );
}
