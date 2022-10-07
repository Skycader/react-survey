import Input from "../input/Input";
import Textarea from "../Textarea/Textarea";
import Style from "./Form.module.css";
import reducer from "../../hooks/reducer";
import { Link, useNavigate } from 'react-router-dom'
import { useReducer, useCallback } from "react";

const Form = (props) => {
  const navigate = useNavigate();

  let survey = {
    "Name": "",
    "Surname": "",
    "Birthday": "",
    "Telephone": "x-xxxx-xx-xx",
    "Website": "https://",
    "About yourself": "",
    "Stack": "",
    "Last project": "",
    formSubmitted: false,
  };

  const [state, dispatch] = useReducer(reducer, survey);

  const submit = (e) => {
    props.setSurvey(state)
    e.preventDefault();
    navigate('/survey')
  };

  const abort = (e) => {
    e.preventDefault();
    dispatch({ type: "abort" });
    navigate('/', {replace: true})
  };

  return (
    <form className={Style.form} onSubmit={submit}>
      <center>
        <h1>Survey for Front-End developer</h1>
      </center>
      <Input name="Name" setValue={dispatch} value={state.name}></Input>
      <Input name="Surname" setValue={dispatch} value={state.surname}></Input>
      <Input
        type="date"
        name="Birthday"
        setValue={dispatch}
        value={state.birthday}
      ></Input>
      <Input
        type="tel"
        name="Telephone (x-xxxx-xx-xx)"
        setValue={dispatch}
        value={state["Telephone"]}
      ></Input>
      <Input
        type="url"
        name="Website url (https only)"
        setValue={dispatch}
        value={state["Website"]}
      ></Input>
      <Textarea
        setValue={dispatch}
        value={state["About yourself"]}
        name="About yourself"
      ></Textarea>
      <Textarea
        setValue={dispatch}
        value={state["Stack"]}
        name="About your stack"
      ></Textarea>
      <Textarea
        name="About your last project"
        setValue={dispatch}
        value={state["Last project"]}
      ></Textarea>
      <div className={Style.buttons}>
        <button
          className={[Style.button, Style.abort].join(" ")}
          onClick={(e) => abort(e)}
        >
          Abort
        </button>
        <button className={[Style.button, Style.abort].join(" ")}>Send</button>
        {/* <Link to="/survey">To survey</Link> */}
      </div>
    </form>
  );
};

export default Form;
