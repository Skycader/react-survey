import Input from "../input/Input";
import Textarea from "../Textarea/Textarea";
import Style from "./Form.module.css";
import reducer from "../../hooks/reducer";
import { useReducer } from "react";

const Form = (props) => {
  let survey = {
    name: "",
    surname: "",
    birthday: "",
    telephone: "",
    website: "",
    aboutYourself: "",
    stack: "",
    lastProject: "",
    formSubmitted: false,
  };

  const [state, dispatch] = useReducer(reducer, survey);

  const submit = (e) => {
    props.setSurvey(state)
    props.setShowForm(false)
    e.preventDefault();
  };

  const abort = (e) => {
    e.preventDefault();
    dispatch({ type: "abort" });
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
        value={state.telephone}
      ></Input>
      <Input
        type="url"
        name="Website url"
        setValue={dispatch}
        value={state.website}
      ></Input>
      <Textarea
        setValue={dispatch}
        value={state.aboutYourself}
        name="About yourself"
      ></Textarea>
      <Textarea
        setValue={dispatch}
        value={state.stack}
        name="About your stack"
      ></Textarea>
      <Textarea
        name="About your last project"
        setValue={dispatch}
        value={state.lastProject}
      ></Textarea>
      <div className={Style.buttons}>
        <button
          className={[Style.button, Style.abort].join(" ")}
          onClick={(e) => abort(e)}
        >
          Abort
        </button>
        <button className={[Style.button, Style.abort].join(" ")}>Send</button>
      </div>
    </form>
  );
};

export default Form;
