import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Country from "./pages/Country"
import League from "./pages/League"
import Team from "./pages/team"
import styled from "styled-components"
import { ContextProvider } from "./context/AppContext"


export default function App(){

  return (
    <>
    <ContextProvider>
      <Back />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/country" element={<Country />}/>
          <Route path="/league" element={<League />}/>
          <Route path="/team" element={<Team />}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
    </>
    )
}



const Back = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: var(--global-tertiary-color);
    opacity: 0.2;
`;