//@flow

import React from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import Container from "./components";
import reducer from "./reducers";

const middleWares = [thunkMiddleware];
const store = createStore(reducer, applyMiddleware(...middleWares));

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
