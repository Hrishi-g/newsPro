import loading from "./38.gif";
import "./Newsitem.css";

import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="loading" src={loading} alt="loading" />
      </div>
    );
  }
}
