import React from 'react'; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import FavoriteList from './pages/FavoriteList';
import Home from './pages/Home';
//import posed, { PoseGroup } from "react-pose";

function App() {

  return (
    <Router>
        <Switch>
          <Route path="/favorite-list">
            <FavoriteList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    
    </Router>
  );
}

export default App;