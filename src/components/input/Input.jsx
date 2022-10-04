import React from "react";
import Style from "./Input.module.css";

import mask from '../../Functions/Mask'
const Input = (props) => {


  let placeholder = `Type your ${props.name.toLowerCase()}`;
  let pattern =
    props.type === "tel" ? "[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}" : "*";
  pattern = props.type === "url" ? "(https)?://(\\S+).(\\S+)" : "*";
  return (
    <>
      <label className={Style.label}>{props.name}</label>
      <input
        className={Style.input}
        required
        onChange={(e) => {
          props.setValue({
            type: props.name,
            payload: mask(e, e.target.value, props.type),
          });
        }}
        value={props.value}
        type={props.type}
        pattern={pattern}
        placeholder={placeholder}
      ></input>
      <br />
    </>
  );
};

export default Input;
