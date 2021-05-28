import React from 'react';
import Main from './pages/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
