import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"

const  DashBoard = React.lazy(()=> import('./components/dashboard'));
const Landing = React.lazy(()=> import('./components/landing'))



function App() {
  return (
    <div>
    <BrowserRouter>
    <AppBar/>
    <Routes>
    <Route path="/dashboard" element={
      <Suspense fallback={<div>Loading...</div>}>
        <DashBoard/>
      </Suspense>

    }/>
    <Route path="/" element={
      <Suspense fallback={<div>Loading...</div>}>
        <Landing/>
      </Suspense>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

function AppBar(){
  const navigate = useNavigate();
  return(
    <div>
      <button onClick={() =>{ navigate('/')}}>Landing Page</button>
      <button onClick={() =>{ navigate('/dashboard')}}>Dashboard Page</button>
    </div>
  )
}

export default App
