import React, { Component } from "react";
import "./index.css";
class Input extends Component {
  constructor(...args) {
    super(args);
    this.state = {
      message: ""
    };
  }

  change(e) {
    const { rules, prop, updateFormData } = this.props;
    let value = e.target.value;
    const itemRules = rules[prop];
    let message = "";
    itemRules.map(rule => {
      if (rule.trigger && rule.trigger === "change")
        if (rule.required && value.trim() === "" && !message) {
          message = rule.message;
        }
      if (rule.min && !message) {
        message = rule.min > value.length ? rule.message : "";
      }
      if (rule.max && !message) {
        message = rule.max < value.length ? rule.message : "";
      }
    });
    updateFormData(prop, value, message);
    this.setState({
      message
    });
  }
  blur(e) {
    const { rules, prop, updateFormData } = this.props;
    let value = e.target.value;
    const itemRules = rules[prop];
    let message = "";
    itemRules.map(rule => {
      if (!rule.trigger || rule.trigger === "blur")
        if (rule.required && value.trim() === "" && !message) {
          message = rule.message;
        }
      if (rule.min && !message) {
        message = rule.min > value.length ? rule.message : "";
      }
      if (rule.max && !message) {
        message = rule.max < value.length ? rule.message : "";
      }
    });
    updateFormData(prop, value, message);
    this.setState({
      message
    });
  }
  render() {
    const { placeholder, type, disabled, prefixed, rows, cols } = this.props;
    const { message } = this.state;
    return (
      <div className="Input_container">
        {prefixed ? <span className="Icon_Input">{prefixed}</span> : ""}
        {type && type === "textarea" ? (
          <textarea
            onBlur={this.blur.bind(this)}
            onChange={this.change.bind(this)}
            disabled={disabled}
            placeholder={placeholder}
            className={["Input", "InputArea"].join(" ")}
            rows={rows}
            cols={cols}
          />
        ) : (
          <input
            onBlur={this.blur.bind(this)}
            type={type ? type : "text"}
            className={[
              "Input",
              "InputText",
              prefixed ? "have_prefixed" : ""
            ].join(" ")}
            onChange={this.change.bind(this)}
            disabled={disabled}
            placeholder={placeholder}
          />
        )}
        <div className="Input_style" />
        <span className={message ? "Message" : "hide"}>
          {message ? message : ""}
        </span>
      </div>
    );
  }
}

export default Input;
