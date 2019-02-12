import React, { Component } from "react";
import "./index.css";

class Row extends Component {
  render() {
    return (
      <section className="container_wrapper">
       {this.props.children}
      </section>
    );
  }
}

export default Row;
