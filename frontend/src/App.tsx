import { useState } from 'react'
import './App.css'
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Navbar } from './components/Navbar';


function App() {

  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
