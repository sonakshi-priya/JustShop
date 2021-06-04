import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { StateProvider } from "./StateProvider";
import reducer from "./reducer";

function App() {
  return (
    <StateProvider reducer={reducer} initialState={{ basket: [] }}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <h1>Login Page</h1>
            </Route>
            <Route path="/">
              <Header />
              <Home />
              {/* <h1>Home Page</h1> */}
            </Route>
          </Switch>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
