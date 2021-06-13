import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header/header';
import NavMenu from './components/menu/nav-menu';
import ContentBody from './components/content/ContentBody';
import List from './components/List/List';


function App() {
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
    </>
  );
}

export default App;
