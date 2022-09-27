import React from "react";
import "./App.css";

class FormText extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  
  render() {
    let placeholder = `Type here ${this.props.name.toLowerCase()}`
    let pattern = (this.props.type=="tel") ? "[0-9]{3}-[0-9]{3}-[0-9]{4}" : ""
    return (
      <>
        <label>{this.props.name}</label>
        <textarea ref={this.inputRef} rows="7" placeholder={placeholder}></textarea>
        <br/>
      </>
    );
  }
}

export default FormText;
