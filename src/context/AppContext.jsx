import { createContext, useRef } from "react";

const AppContext = createContext(null)

function ContextProvider({children}){

    const countryRef = useRef(null)

    console.log(countryRef)

    return (
        <AppContext.Provider value={{countryRef}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, ContextProvider}