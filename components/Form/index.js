import React, { Component } from "react";
import FormItem from "./FormItem";
import "./index.css";
const Item = FormItem;
class Form extends Component {
  constructor(...args){
    super(args)
  }
  updateFormData(prop,value,message){
    const { model} = this.props;
    model[prop] = value
    model["validateMessag"] = message
    this.setState({
        model
    })
  }
  render() {
    const { children, width, rules} = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        rules: rules,
        updateFormData:this.updateFormData.bind(this)
      })
    );
    return (
      <form className="FormContainer" style={{ width: width }}>
        {childrenWithProps}
      </form>
    );
  }
}
export default Form;
