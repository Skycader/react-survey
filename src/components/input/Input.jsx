import React from "react";
import Style from './Input.module.css'
const Input = (props) => {
  let placeholder = `Type your ${props.name.toLowerCase()}`;
  let pattern =
    props.type === "tel" ? "[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}" : "*";

  return (
    <>
      <label className={Style.label}>{props.name}</label>
      <input className={Style.input}
        required
        onChange={(e)=>{props.setValue({type: props.name, payload: e.target.value})}}
        value={props.value}
        type={props.type}
        pattern={pattern}
        placeholder={placeholder}
      ></input>
      <br/>
    </>
  );
};

export default Input;
