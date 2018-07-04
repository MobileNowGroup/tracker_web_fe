import React, { Component } from "react";
import "./style/css/main.css";
import Auth from "../src/containers/Auth";
import Tracker from "../src/containers/Tracker";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import {
  createStore,
  applyMiddleware,
  compose,
  bindActionCreators
} from "redux";
import thunk from "redux-thunk";
import Reducers from "../src/reducers/Reducers";

const store = createStore(Reducers, compose(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/auth" extac component={Auth} />
            <Route path="/tracker" component={Tracker} />
            <Redirect to="/auth" />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
