import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header/header';
import NavMenu from './components/menu/nav-menu';
import ContentBody from './components/content/ContentBody';
import { UserAnonymousHelper } from './components/helpers/user-anonymous-helper';
import { AxiosHelper } from './components/helpers/axios-helper';
import List from './components/List/List';
import Footer from './components/footer/footer'

function App() {
  UserAnonymousHelper.initializeUserAnonymous()

  AxiosHelper.initializeAxios()  
  return (
    <>
      <Header></Header>
      <div style={{backgroundColor: "#EEF7FF"}}>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/hotel">
            <List />
          </Route>
          <Route path="/attractions">
            <List />
          </Route>
          <Route path="/restaurant">
            <List />
          </Route>
          <Route path="/shopping">
          <List />
          </Route>
          <Route path="/nextevent">
          <List />
          </Route>
          <Route path="/contacts">
            <List />
          </Route>
          <Route path="/">
            <ContentBody />
          </Route>
        </Switch>
      </Router>
      <Footer />
      </div>

    </>
  );
}

export default App;
