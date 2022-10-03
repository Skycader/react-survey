import React from "react";
import "./App.css";

class FormText extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  
  render() {
    let placeholder = `Type here ${this.props.name.toLowerCase()}`
    return (
      <>
        <label>{this.props.name}</label>
        <textarea required ref={this.inputRef} rows="7" placeholder={placeholder}></textarea>
        <br/>
      </>
    );
  }
}

export default FormText;
