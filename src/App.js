import './App.css';
import Camion from './components/Camion'
import Helado from './components/Helado'

import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App container">
     <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/camion">camion</Link>
              <Link className="nav-item nav-link" to="/helado">helado</Link>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/camion">
            <Camion />
          </Route>
          <Route path="/helado">
            <Helado />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
