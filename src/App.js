import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import SimpleRest from './components/SimpleRest';
import Test from './components/Test';
import Attribution from "./components/Attribution";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <h1>Result is: </h1>
          </div>
          <Link to='/simplerest'>
            <button>Rest</button>
          </Link>
          <Link to='/test'>
            <button>Test</button>
          </Link>
          <Link to='/'>
              <button>Clear</button>
          </Link>
          <Switch>
              <Route path='/simplerest' exact component={SimpleRest} />
              <Route path='/test' exact component={Test} />
          </Switch>
          <Attribution />
      </BrowserRouter>
  );
}

export default App;
