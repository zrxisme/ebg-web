import React, { Component } from "react";
import "./index.css";
class Button extends Component{
    render(){
        const {type,size,children,click} = this.props
        return (
            <div onClick={click} className={['buttton',type?type:'default',size?size:'middle'].join(" ")}>{children}</div>
        )
    }
}

export default Button;