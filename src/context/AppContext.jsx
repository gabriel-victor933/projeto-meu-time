import { createContext, useRef } from "react";

const AppContext = createContext(null)

function ContextProvider({children}){

    const countryRef = useRef(null)
    const leagueRef = useRef(null)

    const config = {headers: {"x-apisports-key": localStorage.getItem("key")}}

    return (
        <AppContext.Provider value={{countryRef, leagueRef, config}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, ContextProvider}