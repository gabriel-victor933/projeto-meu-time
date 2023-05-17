import { createContext } from "react";

const AppContext = createContext(null)

function ContextProvider({children}){

    return (
        <AppContext.Provider value={"teasasste"}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, ContextProvider}