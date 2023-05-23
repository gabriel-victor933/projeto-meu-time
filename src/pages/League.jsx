import { styled } from "styled-components"
import Home from "../components/Home"
import { AppContext } from "../context/AppContext"
import { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from  'react-loader-spinner'


export default function League(){

    const { leagueRef, countryRef, config, seasonRef } = useContext(AppContext)
    const navigate = useNavigate()
    
    
    const [inputError, setInputError] = useState(false)

    const [leagues,setLeagues] = useState(null)
    const [loading, setLoading] = useState(false)



    useEffect(()=>{
        if(localStorage.getItem("key") == null){
            navigate("/")
        }
        if(countryRef.current == null){
            navigate("/country")
        }
    },[])

    function handleChange(e){

        
        const search = e.target.value
        if(search.length !== 4){
            setInputError(true)
            return;
        } else if(inputError){
            setInputError(false)
        } 
        console.log(search)

        if(search.length === 4){

            setLoading(true)
            axios.get(`https://v3.football.api-sports.io/leagues?country=${countryRef.current.name}&season=${search}`,config)
            .then((res)=>{
                setLoading(false)
                console.log(res.data.response)
                //setLeagues(res.data.response.map((r)=> r.league))
                setLeagues([{
                  "id": 39,
                  "name": "Premier League",
                  "type": "League",
                  "logo": "https://media.api-sports.io/football/leagues/2.png"
                  }]) 
                seasonRef.current = search
            })
            .catch((err)=>{
                alert(`${err.message} try again later.`)
                setLoading(false)
            })

        }
    }
    

    function handleClick(league){
        leagueRef.current = league
        navigate("/team")
    }

    
    
    return (
        <Home>
            <Container>
                <h2>Selecionar Temporada:</h2>
                <input autoFocus type="number" placeholder="exemplo: 2014" required pattern="[0-9]{4}" onChange={handleChange} />
                {inputError && <small>Temporada deve ter 4 digítos!</small>}
                <h2>Selecionar Liga:</h2>
                <div className="options">
                    {loading && <ThreeDots height="50" width="70" radius="20" color="#212A3E"/>}
                    {!loading && leagues?.map((c,i)=><div key={i} onClick={()=>handleClick(c)}><img src={c.logo}/><p>{c.name}</p></div>)}
                    {leagues?.length === 0 && !loading && <h3>Nenhum liga encontrada</h3>}
                </div>
            </Container>
        </Home>
    )
}

const Container = styled.div`

    padding: 10px;

    h2 {
        font-size: var(--title-secondary-size);
        margin-top: 15px;
    }

    input {
        width: 100%;
        height: 30px;
        margin-top: 15px;
    }
    small {
        font-size: var(--small-text-size);
        margin-bottom: 30px;

    }

    .options {
        width: 100%;
        height: 320px;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        padding-bottom: 60px;

        h3 {
            font-size: var(--title-quaternary-size);
            margin-top: 15px;
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