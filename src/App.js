import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (<>
    <Router>
      <Fragment>
        <Route exact path="/" component={Home} />
      </Fragment>
    </Router>
  </>);
}

export default App;
