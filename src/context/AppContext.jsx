import { createContext, useRef } from "react";

const AppContext = createContext(null)

function ContextProvider({children}){

    const countryRef = useRef(null)
    const seasonRef = useRef(null)
    const leagueRef = useRef(null)
    const teamRef = useRef(null)

    const config = {headers: {"x-apisports-key": localStorage.getItem("key")}}

    return (
        <AppContext.Provider value={{countryRef, leagueRef, teamRef, seasonRef,config}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, ContextProvider}