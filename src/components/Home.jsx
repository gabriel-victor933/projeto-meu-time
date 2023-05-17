import styled from "styled-components"
import img from "../assets/football.png"

export default function Home({children}){

    const name = localStorage.getItem("nome")

    return (
        <Main>
            <div className="header">
                <img src={img}/>
                <h1>Meu Time</h1>
                <p>Bem Vindo, {name} </p>
            </div>
            {children}
        </Main>
    )
}

const Main = styled.main`
    width: 90%;
    min-height: 80vh;
    background-color: var(--global-primary-color);
    border: solid 1px var(--global-tertiary-color);
    border-radius: 30px;
    padding: 0;
    position: fixed;
    top: 30px;
    left: calc(50% - 45%);
    z-index: 2;



    .header {
        width: 100%;
        height: 80px;
        padding: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: var(--global-tertiary-color);
        color: var(--global-primary-color);

        h1{
            font-size: var(--title-primary-size);

        }

        p {
            font-size: var(--title-quaternary-size);
            text-align: end;
            width: 70%;
        }
        

        img {
            filter: invert(100%);
            margin: 0px 10px;
        }
    }
    
`