import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import About from './About';
import Alert from './Alert';
import React, { useState } from 'react';


// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  // alert state
  const [alert, setalert] = useState(null)

  //show alert function 
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    //time after that alert disappears automatically 
    setTimeout(() => {
      setalert(null)
    }, 1500);
  };


  // changing the background color or mode 
  const [mode, setmode] = useState("light")


  const toggleMode = () => {
    if (mode == "light") {
      setmode("dark")
      document.body.style.backgroundColor = '#19124b'
    }

    else {
      setmode("light");
      document.body.style.backgroundColor = 'white'
    }
  }


  return (

    <Router>
          
          <Navbar title={"Texteditor"} mode={mode} toggleMode={toggleMode} />
          
          <Alert alert={alert} />
          
      <Routes>
        <Route exact path="/about" element={<About />} />

        <Route exact path="/" element={      
           <div className='container'>
               <Textform showalert={showalert} mode={mode} />
            </div>
           
        } />


      </Routes>

    </Router>



    //   
  );

}


export default App;
