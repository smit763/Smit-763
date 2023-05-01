import React, { useState } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Numbers from './components/Project1/Numbers';
import Inputfield from './components/Project2/Inputfield';
import Clock from './components/Project3/Clock';
import State from './components/Project4/State';
import Accordion from './components/Project5/Accordion';
import Notes from './components/Project6/Notes'
import Context from './components/Project7/Context';
import Effect from './components/Project8/Effect';
import Covidmain from './components/Project9.js/Covidmain';
import Pokemon from './components/Project10/Pokemon';
import Login from './components/Project11/Login';
import LoginPage from './components/Project11/LoginPage';
import SignupPage from './components/Project11/SignupPage';
import Home2 from './components/Project11/Home2';
import Admin from './components/Project12/Admin';
import Axios from './components/Project13/Axios';
import User from './components/Project14/User';

function App() {
  const [islogin, setislogin] = useState(null)
  const getdata = (ans)=>{
    setislogin(ans)
  }
  const Location = useLocation()
  console.log(Location)
  return (
    <>
      
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/number-increment" element={<Numbers/>}/>        
          <Route path="/list" element={<Inputfield/>}/>
          <Route path="/clock" element={<Clock/>}/>
          <Route path="/state" element={<State/>}/>
          <Route path="/accordion" element={<Accordion/>}/>
          <Route path="/notes" element={<Notes/>}/>
          <Route path="/context" element={<Context/>}/>
          <Route path="/effect" element={<Effect/>}/>
          <Route path="/covid-information" element={<Covidmain/>}/>
          <Route path="/pokemon" element={<Pokemon/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/login-page" element={<LoginPage data={getdata} />}/>
          <Route path="/signup-page" element={<SignupPage data={getdata}/>}/>
          {islogin&&<Route path="/login-home" element={<Home2/>}/>}
          <Route path="/admin-panel" element={<Admin/>}/>
          <Route path="/axios" element={<Axios/>}/>
          <Route path="/user/:fname" element={<User/>}/>
        </Routes>
    </>
  );
}
export default App;