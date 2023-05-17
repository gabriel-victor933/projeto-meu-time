import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Country from "./pages/Country"
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