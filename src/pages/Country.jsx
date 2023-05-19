import { styled } from "styled-components"
import Home from "../components/Home"
import { AppContext } from "../context/AppContext"
import { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from  'react-loader-spinner'


export default function Country(){

    const { countryRef, config } = useContext(AppContext)
    const navigate = useNavigate()
    const [countries,setCountries] = useState(null)
    const [loading, setLoading] = useState(false)


   

    useEffect(()=>{
        if(localStorage.getItem("key") == null){
            navigate("/")
        }
    },[])

    

    function handleChange(e){

        const search = e.target.value
        if(search.length >=3){

            setLoading(true)
            axios.get(`https://v3.football.api-sports.io/countries?search=${search}`,config)
            .then((res)=>{
                

                //passando data enquanto eu não posso fazer mais requisições.
                //trocar para res.data....
                setLoading(false)
                //setCountries(res.data.response)
                setCountries([
                    {
                    "name": "England",
                    "code": "GB",
                    "flag": "https://media.api-sports.io/flags/gb.svg"
                    }
                    ])
            })
            .catch((err)=>{
                alert(`${err.message} try again later.`)
                setLoading(false)
            })

        }
    }

    function handleClick(country){
        countryRef.current = country
        navigate("/league")
    }

    return (
        <Home>
            <Container>
                <h2>Selecionar Pais:</h2>
                <input autoFocus onChange={handleChange} placeholder="exemplo: England"/>
                <div className="options">
                    {loading && <ThreeDots height="50" width="70" radius="20" color="#212A3E"/>}
                    {!loading && countries?.map((c,i)=><div key={i} onClick={()=>handleClick(c)}><img src={c.flag}/><p>{c.name}</p></div>)}
                    {countries?.length === 0 && !loading && <h3>Nenhum pais encontrado</h3>}
                </div>
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

    .options {
        width: 100%;
        height: 400px;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        padding-bottom: 60px;

        h3 {
            font-size: var(--title-quaternary-size);
        }
        
        div {
            width: 130px;
            margin: 15px;

            &:hover{
                opacity: 0.5;
            }

            img {
                width: 100%;
            }

            p {
                font-size: var(--title-quartenary-size)
            }
        }
    }
    
`