import styled from "styled-components"
import img from "../assets/football.png"
import { useRef } from "react"

export default function Login(){

    const inputRef = useRef("")

    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
    }

    console.log(inputRef)
    
    return (
        <Block>
            <img src={img}/>
            <h1>Meu time</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputRef.current} onChange={()=>inputRef.current = e.target.value} />
                <label ></label>
                <button>Entrar</button>
            </form>
            <p>
                Obtenha a chave nesse <a href="https://rapidapi.com/auth?referral=/developer">Link!</a>
            </p>
        </Block>
    )
}

const Block = styled.div`
    --size: 400px;
    background-color: var(--global-primary-color);
    width: var(--size);
    height: var(--size);
    position: fixed;
    top: calc(50% - var(--size)/2);
    left: calc(50% - var(--size)/2);;
    border: solid 3px var(--global-secondary-color);
    border-radius: 50px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 15%;
        aspect-ratio: 9/10;
    }

    h1 {
        font-family: var(--title-font);
        font-size: var( --title-primary-size);
        margin: 10px 0px;
    }

    p {
        font-size: var(--small-text-size);
        font-family: var(--text-font);

        a {
            color: #0000FF;
        }
    }


    @media (max-width: 420px){
        width: 100%;
        left:0;
    }
`