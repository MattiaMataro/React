import './App.css';

import { createStore } from 'redux';
import reducers from './reducers';

// Router
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

// Components
import Home from './components/Home';
import LightSwitch from './components/LightSwitch';
import Counter from './components/Counter';
import UsersList from './components/UsersList';
import Songs from './components/Songs';
import NotFound from './components/NotFound';
import Todos from './components/Todos';

// Contexts
import UserContext, { UserService } from './contexts/UserContext';
import { Provider } from 'react-redux';

export function App() {

  const store = createStore(reducers);

  return (
    <div className="container">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/light-switch" className="nav-link">Light Switch</Link>
                </li>
                <li className="nav-item">
                  <Link to="/counter" className="nav-link">Counter</Link>
                </li>
                <li className="nav-item">
                  <Link to="/users" className="nav-link">Users</Link>
                </li>
                <li className="nav-item">
                  <Link to="/songs" className="nav-link">Songs</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-lg-12">
          <Provider store={store}>
            <UserContext.Provider value={new UserService()}>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/todos">
                  <Todos />
                </Route>
                <Route path="/light-switch">
                  <LightSwitch />
                </Route>
                <Route path="/counter">
                  <Counter />
                </Route>
                <Route path="/users" exact>
                  <UsersList />
                </Route>
                <Route path="/songs">
                  <Songs />
                </Route>
                <Route path="/users/:id/todos">
                  <Todos />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </UserContext.Provider>
            </Provider>

          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


