import React from "react";
import Style from './Textarea.module.css'
const Textarea = (props) => {
  let placeholder = `Type here ${props.name.toLowerCase()}`;
  let warn = (props.value?.length>600)?Style.warning:''
  return (
    <>
      <label className={Style.label}>{props.name}</label>
      <textarea className={Style.textarea}
        onChange={(e) => {
          props.setValue({type: props.name, payload:e.target.value});
        }}
        value={props.value}
        required
        rows="7"
        placeholder={placeholder}
      ></textarea>
      <div className={warn}>Characters left: {props.value?.length || 0}/600 {warn&&"Field character limit exceeded!"}</div>
      <br />
    </>
  );
};

export default Textarea;
