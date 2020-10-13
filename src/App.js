import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SimpleRest from './components/SimpleRest';
import Test from './components/Test';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import WelcomePage from './components/WelcomePage';
import Attribution from "./components/Attribution";
import NewestSlider from "./components/NewestSlider";
import OverallRanking from "./components/OverallRanking";
import BetMore from "./components/BetMore";
import HistoryTable from "./components/HistoryTable";

function App() {
  return (
      <BrowserRouter>
          <Header />
          <WelcomePage />
          <Login />
          <Register />
          <Test />
          <NewestSlider />
          <OverallRanking />
          <BetMore />
          <HistoryTable />
          <Switch>
              <Route path='/simplerest' exact component={SimpleRest} />
              <Route path='/test' exact component={Test} />
          </Switch>
          <Attribution />
          <Footer />
      </BrowserRouter>
  );
}

export default App;
