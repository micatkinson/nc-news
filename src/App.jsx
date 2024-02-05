import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from '../Components/Nav'
import Home from '../Components/Home'
import './App.css'

function App(){

  return (  
    <>      
  <Nav />
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  </>
)

}


export default App
