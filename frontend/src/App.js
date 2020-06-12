import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import NewAsk from './components/NewAsk';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/ask" component = {NewAsk}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
