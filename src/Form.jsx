import React from "react";
import "./App.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    let placeholder = `Type your ${this.props.name.toLowerCase()}`
    let pattern = (this.props.type==="tel") ? "[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}" : "*" 
    return (
      <>
        <label>{this.props.name}</label>
        <input required ref={this.inputRef} type={this.props.type} pattern={pattern} placeholder={placeholder}></input>
        <br/>
      </>
    );
  }
}

export default Form;
