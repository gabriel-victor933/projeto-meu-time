import styled from "styled-components"
import img from "../assets/football.png"
import { useRef, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ThreeDots } from  'react-loader-spinner'


export default function Login(){

    const [erro, setErro] = useState(false)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef("")
    const navigate = useNavigate()


    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        setErro(false)
        const config = {headers: {"x-apisports-key": inputRef.current}}

        axios.get(`${import.meta.env.VITE_APP_API_URL}/status`,config)
        .then((res)=>{
            if(res.data.errors.length != 0){
                setErro(true)
            } else {
                const {firstname, lastname} = res.data.response.account
                localStorage.setItem("nome",`${firstname} ${lastname}`)
                localStorage.setItem("key",inputRef.current)
                navigate("/country")

            }
            setLoading(false)

        })
        .catch((err)=>{
            alert(`${err.message} try again later.`)
            setLoading(false)
        })
    }
    
    return (
        <>
        <Block erro={erro ? "red": "black"}>
            <img src={img}/>
            <h1>Meu time</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor="key">Chave de Acesso:</label>
                <input disabled={loading} autoFocus required type="text" name="key"  onChange={(e)=>inputRef.current = e.target.value} />
                <button disabled={loading}>{!loading ? "Entrar": <ThreeDots height="30" width="50" radius="15" color="#F1F6F9"/>}</button>
            </form>
            {erro && <p>Chave de acesso inválida</p>}
            <p>
                Obtenha a chave nesse <a href="https://rapidapi.com/auth?referral=/developer">Link!</a>
            </p>
        </Block>
        </>
    )
}



const Block = styled.div`
    --size: 400px;
    background-color: var(--global-primary-color);
    width: var(--size);
    height: var(--size);
    position: fixed;
    top: calc(50% - var(--size)/2);
    left: calc(50% - var(--size)/2);
    z-index: 2;
    border: solid 3px var(--global-secondary-color);
    border-radius: 50px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 20%;
        aspect-ratio: 9/10;
    }

    h1 {
        font-family: var(--title-font);
        font-size: var( --title-primary-size);
        margin: 10px 0px;
    }

    form {
        margin: 20px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        width: 80%;

        input {
            width: 100%;    
            height: 28px;
            border: solid 1px ${props => props.erro};
        }

        button {
            width: 100%;
            height: 28px;
            background-color: var(--global-quaternary-color);
            color: var(--global-primary-color);
            border: solid 0.5px var(--global-quaternary-color);
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {               
                background-color: var(--global-secondary-color);
            }
        }
    }

    p {
        font-size: var(--small-text-size);
        font-family: var(--text-font);
        margin: 5px;

        a {
            color: #0000FF;
        }
    }


    @media (max-width: 420px){
        width: 100%;
        left:0;
    }
`