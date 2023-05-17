import { styled } from "styled-components"
import Home from "../components/Home"
import { AppContext } from "../context/AppContext"
import { useContext } from "react"

export default function Country(){

    const teste = useContext(AppContext)

    const config = {headers: {"x-apisports-key": localStorage.getItem("key")}}

    function handleChange(e){

        if(e.target.value.length >=3){
            console.log(e.target.value)

        }
    }

    return (
        <Home>
            <Container>
                <h2>Selecionar Pais:</h2>
                <input autoFocus onChange={handleChange}/>
            </Container>
        </Home>
    )
}

const Container = styled.div`

    padding: 10px;

    h2 {
        font-size: var(--title-secondary-size)
    }

    input {
        width: 100%;
        height: 30px;
        margin: 15px 0px;
    }
    
`