import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header/header';
import NavMenu from './components/menu/nav-menu';

function App() {
  return (
    <>
      <Header></Header>
      <Router>
      <NavMenu />
      <Switch>
        <Route path="/hotels">
          <Hotels />
        </Route>
        <Route path="/touristspots">
          <Touristspots />
        </Route>
        <Route path="/restaurants">
          <Restaurants />
        </Route>
        <Route path="/shoppings">
          <Shoppings />
        </Route>
        <Route path="/nextevent">
          <Nextevent />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </>
  );

  function Home () {
    return <h2>Home</h2>;
  }

  function Hotels () {
    return <h2>Hoteis</h2>;
  }

  function Touristspots () {
    return <h2>Pontos Turísticos</h2>;
  }

  function Restaurants () {
    return <h2>Restaurantes</h2>;
  }

  function Shoppings () {
    return <h2>Shoppings</h2>;
  }

  function Nextevent () {
    return <h2>Próximos eventos</h2>;
  }

  function Contacts () {
    return <h2>Contatos</h2>;
  }
}

export default App;
