import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages/index';
import * as ROUTES from './constants/routes';
import './App.css';

function App() {
   return (
      <Router>
         <Route exact path={ROUTES.HOME} component={Home} />
         <Route exact path={ROUTES.BROWSE} component={Browse} />
         <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
         <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      </Router>
   );
}

export default App;
