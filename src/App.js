import React from "react";
import "./App.css";
import Form from "./Form.jsx";
import FormText from "./FormText.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.websiteRef = React.createRef();
    this.telephoneRef = React.createRef();
    this.birthdayRef = React.createRef();
    this.aboutYourselfRef = React.createRef();
    this.stackRef = React.createRef();
    this.lastProjectRef = React.createRef();
  }
  printSurvey = () => {
    console.log(this.nameRef.value);
  };

  abort = (e) => {
      e.preventDefault()
      this.nameRef.current.inputRef.current.value=""
      this.surnameRef.current.inputRef.current.value=""
      this.telephoneRef.current.inputRef.current.value=""
      this.birthdayRef.current.inputRef.current.value=""
      this.websiteRef.current.inputRef.current.value=""
      this.aboutYourselfRef.current.inputRef.current.value=""
      this.stackRef.current.inputRef.current.value=""
      this.lastProjectRef.current.inputRef.current.value=""
  };

  send = (e) => {
    // e.preventDefault();
    let user = {
      name: this.nameRef.current.inputRef.current.value,
      surname: this.surnameRef.current.inputRef.current.value,
      telephone: this.telephoneRef.current.inputRef.current.value,
      brithday: this.birthdayRef.current.inputRef.current.value,
      website: this.websiteRef.current.inputRef.current.value,
      aboutYourself: this.aboutYourselfRef.current.inputRef.current.value,
      stack: this.stackRef.current.inputRef.current.value,
      lastProject: this.lastProjectRef.current.inputRef.current.value,
    };
    console.log(e)
    alert(JSON.stringify(user,null,2));
  };
  render() {
    return (
      <div>
        <center>
          <h1>Survey for Front-End developer</h1>
        </center>
        <form>
          <Form ref={this.nameRef} name="Name"></Form>
          <Form ref={this.surnameRef} name="Surname"></Form>
          <Form ref={this.birthdayRef} type="date" name="Birthday"></Form>
          <Form ref={this.telephoneRef} type="tel" name="Telephone (x-xxxx-xx-xx)"></Form>
          <Form ref={this.websiteRef} type="url" name="Website url"></Form>
          <FormText
            ref={this.aboutYourselfRef}
            name="About yourself"
          ></FormText>
          <FormText ref={this.stackRef} name="About your stack"></FormText>
          <FormText
            ref={this.lastProjectRef}
            name="About your last project"
          ></FormText>
          <div className="buttons">
            <button onClick={(e) => this.abort(e)} className="abort">
              Abort
            </button>
            <button onClick={(e) => this.send(e)} className="send">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
