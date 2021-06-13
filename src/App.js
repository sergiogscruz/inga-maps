import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header/header';
import NavMenu from './components/menu/nav-menu';
import ContentBody from './components/content/ContentBody';


function App() {
  if (!localStorage.getItem('user')) {
    localStorage.setItem('user', JSON.stringify({
      name: "Anônimo",
      personType: "TOURIST_ANONYMOUS",
      photo: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png",
      token: "Basic YW5vbmltbzppbmdhbWFwcw=="
    }))
  }

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
            <ContentBody />
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
