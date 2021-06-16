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
import { FirebaseHelper } from './components/helpers/firebase-helper';
import { UserAnonymousHelper } from './components/helpers/user-anonymous-helper';
import { AxiosHelper } from './components/helpers/axios-helper';
import List from './components/List/List';
import Footer from './components/footer/footer'

function App() {
  FirebaseHelper.initializeApp()

  UserAnonymousHelper.initializeUserAnonymous()

  AxiosHelper.initializeAxios()  
  return (
    <>
      <Header></Header>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/hotels">
            <ContentBody />
          </Route>
          <Route path="/touristspots">
            <ContentBody />
          </Route>
          <Route path="/restaurants">
            <List />
          </Route>
          <Route path="/shoppings">
            <ContentBody />
          </Route>
          <Route path="/nextevent">
            <ContentBody />
          </Route>
          <Route path="/contacts">
            <ContentBody />
          </Route>
          <Route path="/">
            <ContentBody />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
