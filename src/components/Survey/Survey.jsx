import Style from './Survey.module.css'
import Input from "../input/Input";
import Textarea from "../Textarea/Textarea";
import Display from "../Display/Display"

const Survey = (props) => {
   let state = props.survey

  return (
    <form className={Style.form}>
      <center>
        <h1>Thank you for applying!</h1>
      </center>
      <h1>Your survey</h1>
      <Display label="Name" info={state.name}></Display>
      <Display label="Surname" info={state.surname}></Display>
      <Display label="Birthday" info={state.birthday}></Display>
      <Display label="Telephone" info={state.telephone}></Display>
      <Display label="Website" info={state.website}></Display>
      <Display label="About yourself" info={state.aboutYourself}></Display>
      <Display label="About your stack" info={state.stack}></Display>
      <Display label="About your last project" info={state.lastProject}></Display> 
    </form>
  );
};

export default Survey;
