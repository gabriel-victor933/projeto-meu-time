import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Country from "./pages/Country"
import League from "./pages/League"
import Team from "./pages/team"
import Infos from "./pages/Infos"
import styled from "styled-components"
import { ContextProvider } from "./context/AppContext"


export default function App(){

  return (
    <>
    <ContextProvider>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/country" element={<Country />}/>
          <Route path="/league" element={<League />}/>
          <Route path="/team" element={<Team />}/>
          <Route path="/infos" element={<Infos />}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
    </>
    )
}



