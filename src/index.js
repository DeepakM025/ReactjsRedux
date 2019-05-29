import React from "react";
import ReactDOM from "react-dom";
import "./style/main.less";
import App from "./components/App";
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer)

/* eslint-disable require-jsdoc */
export class Index extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
/* eslint-disable require-jsdoc */