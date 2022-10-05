import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Root from "./components/Root/Root.jsx";
import Form from "./components/Form/Form.jsx";
import Survey from "./components/Survey/Survey.jsx";
import { useState } from 'react'
const App = () => {
  const [survey,setSurvey] = useState({})
  return (
    <Root>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/form" element={<Form setSurvey={setSurvey}></Form>}/>
          <Route path="/survey" element={<Survey survey={survey}></Survey>}/>
        </Routes>
        </BrowserRouter>
    </Root>
  );
};

export default App;
