import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Hero from './components/Hero/Hero';
import NotFound from './components/NotFound/NotFound';
import Movie from './pages/Movie';
import Load from './components/Load/Load';

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Header />
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/:movieId" component={ Movie } />
              <Route component={ NotFound } />
            </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
