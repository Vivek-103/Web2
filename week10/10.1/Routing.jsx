import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route,Link,useNavigate ,Outlet} from "react-router-dom";

function App() {
  return <div>
    <BrowserRouter>
  <Routes>
    <Route path = "/"element={<Layout/>}>
      <Route path = "/neet/online-coaching-class-11"element={<Class11Program/>}/>
      <Route path = "/neet/online-coaching-class-12"element={<Class12Program/>}/>
      <Route path = "/"element={<Landing/>}/>
      <Route path = "*"element={<ErrorPage/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </div>
}

function Layout(){
  return <div style = {{height:"100vh",background:"black"}}>
    <Header/>
    <div style = {{height : "90vh",background:"red"}}>
    <Outlet/>
    </div>
    Footer
  </div>
}
function Header(){
  return <div>
     <Link to = "/"> Allen </Link>
     |
    <Link to = "/neet/online-coaching-class-11">Class 11</Link>
    |
    <Link to = "/neet/online-coaching-class-12">Class 12 </Link>
    |
  </div>
}

function Class11Program(){
  return <div>
    NEET programs for Class 11th
  </div>
}

function Class12Program(){
  const navigate = useNavigate();   

  function redirectUser(){
    navigate("/")
  }

  return <div>
    NEET programs for Class 12th
     <button onClick= {redirectUser}>Go back to Landing Page</button>
  </div>
}

function Landing(){
  return <div>
    Welcome to Allen
  </div>
}

function ErrorPage(){
  return <div>
    Sorry Page not Found
  </div>
}
export default App
