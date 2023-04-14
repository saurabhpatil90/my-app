import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
// import About from './Component/About';
import Alert from './Component/Alert';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from "react";
import About from './Component/About';
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (Message, type) => {
    setAlert({
      msg: Message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  const toggleStyle = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  }



  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleStyle={toggleStyle} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<div className="container my-3">
            <TextForm heading="Enter Your Text Here" mode={mode} showAlert={showAlert} />
          </div>} />
          <Route path='about' element={<About />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;

