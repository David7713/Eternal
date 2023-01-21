//HOOKS Imports//

import { useState,useEffect,useContext,useReducer } from 'react';
import React from 'react';
import HashLoader from "react-spinners/HashLoader";



//JS Imports//

import Navbar from './Navigation-Bar/Navbar';



//CSS Imports//
import './App.css';
import './Navigation-Bar/Navbar.css'
import './Spinner/Spinner.css'



function App() {


const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
    setLoading(false)
    },3000)
  },[])

  return (
    <div className="App">
      
      {/* Spinner */}
      {
    loading?
    <div className='spinner'>
    <HashLoader

    className='spinner-center'
    // color="#45f248"
    color="#72BF44"
    cssOverride={{}}
    size={80}
    speedMultiplier={1}
  />
  </div>
    :
        <div className='main-page'> 

          <Navbar></Navbar>
</div>

      }

    </div>
  );
}

export default App;
