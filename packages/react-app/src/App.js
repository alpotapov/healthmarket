import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasicProfile from './pages/BasicProfile/BasicProfile';
import PatientProfile from './pages/PatientProfile/PatientProfile';
import TechPage from './pages/TechPage';

import './index.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/patient-page">
          <PatientProfile />
        </Route>
        <Route path="/offer">
          <TechPage />
        </Route>
        <Route path="/">
          <BasicProfile />
        </Route>
      </Switch>
    </Router>
  );
}
