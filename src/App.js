import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Users from "./containers/Users";
import asyncComponent from "./hoc/asyncComponent";

const AsyncBlockChain = asyncComponent(() => {
  return import("./containers/BlockChain.js");
});

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link> | <Link to="/blockchain">Block Chain</Link>
        </div>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="/blockchain" component={AsyncBlockChain} />
        </div>
      </div>
    );
  }
}

export default App;
