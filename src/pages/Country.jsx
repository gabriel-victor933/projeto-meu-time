import { styled } from "styled-components"
import Home from "../components/Home"
import { AppContext } from "../context/AppContext"
import { useContext } from "react"

export default function Country(){

    const teste = useContext(AppContext)

    return (
        <Home>
            <Container>
                <h2>Selecionar Pais {teste}</h2>
            </Container>
        </Home>
    )
}

const Container = styled.div`

    padding: 10px;

    h2 {
        font-size: var(--title-secondary-size)
    }
    
`