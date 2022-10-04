import React from "react";
import Root from "./components/Root/Root.jsx";
import Form from "./components/Form/Form.jsx";
import Survey from "./components/Survey/Survey.jsx";
import { useState } from 'react'
const App = () => {
  const [showForm,setShowForm] = useState(true)
  const [survey,setSurvey] = useState({})
  return (
    <Root>
      {showForm&&(<Form setSurvey={setSurvey} setShowForm={setShowForm}></Form>)}
      {!showForm&&<Survey survey={survey}></Survey>}
    </Root>
  );
};

export default App;
