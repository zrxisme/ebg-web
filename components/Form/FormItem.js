import React,{Component} from 'react'
import "./FormItem.css";
class FormItem extends Component{

    render(){
        const {children,label,labelWidth,rules,prop,updateFormData}  = this.props
        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, {
              rules: rules,
              prop:prop,
              updateFormData
            })
          );
        return (
            <section className="Item">
              {label?<span className="ItemLabel" style={{width:labelWidth}}> <span className="validate">* </span>{label}：</span>:''}  {childrenWithProps}
            </section>
        )
    }
}


export default FormItem;