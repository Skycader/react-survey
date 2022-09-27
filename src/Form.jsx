import React from "react";
import "./App.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  

  render() {
    let placeholder = `Type your ${this.props.name.toLowerCase()}`
    let pattern = (this.props.type=="tel") ? "[0-9]{3}-[0-9]{3}-[0-9]{4}" : ""
    return (
      <>
        <label>{this.props.name}</label>
        <input ref={this.inputRef}type={this.props.type} pattern={pattern} placeholder={placeholder}></input>
        <br/>
      </>
    );
  }
}

export default Form;
