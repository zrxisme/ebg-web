import React, { Component } from "react";
import "./index.css";

class Card extends Component {
  render() {
    return (
      <section className="card_wrapper">
        <div className="card_item">{this.props.children}</div>
      </section>
    );
  }
}

export default Card;
