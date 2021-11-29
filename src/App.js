import './App.css';
import Header from './component/shared/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Resume from './component/Home/Resume/Resume';
import ContactMe from './component/Home/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contactMe">
            <ContactMe />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
      </Router >
    </div>
  );
}

export default App;
