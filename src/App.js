import React, { useEffect } from "react";
import Login from "./Components/Login";
import Header from "./Components/Header/Header";
import Listingpage from "./Components/ListingPage/Listingpage";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Cart from "./Components/Cart/Cart";
import About from "./Components/About/About";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const history = useHistory();
  const currentUser = useSelector((state) => state.app.currentUser);

  // useEffect(() => {
  //   currentUser ? history.push("/") : history.push("/auth/login");
  // }, []);

  return (
    <div>
      {!currentUser && (
        <Router>
          <Redirect to="/auth/login" />
          <Switch>
            <Route path="/auth/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      )}{" "}
      {currentUser && (
        <Router>
          <Switch>
            <Route path="/auth/login">
              <Login />
            </Route>
            <Route path="/product/:prodId">
              <Header />
              <ProductDetail />
            </Route>
            <Route path="/cart">
              <Header />
              <Cart />
            </Route>
            <Route path="/about">
              <Header />
              <About />
            </Route>
            <Route path="/">
              <Header />
              <Listingpage />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
