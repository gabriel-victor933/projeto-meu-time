import { styled } from "styled-components"
import Home from "../components/Home"
import { AppContext } from "../context/AppContext"
import { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from  'react-loader-spinner'


export default function Team(){

    const { leagueRef, countryRef, teamRef, config, seasonRef } = useContext(AppContext)
    const navigate = useNavigate()
    
    const [teams,setteams] = useState(null)
    const [loading, setLoading] = useState(false)



    useEffect(()=>{
        if(localStorage.getItem("key") == null){
            navigate("/")
        } else if(countryRef.current == null){
            navigate("/league")
        } else if(leagueRef.current == null){
            navigate("/league")
        } else (
            getTeams()
        )
    },[])


    function getTeams(){
        setLoading(true)
        
            setLoading(false)
        axios.get(`${import.meta.env.VITE_APP_API_URL}/teams?country=${countryRef.current.name}&season=${seasonRef.current}&league=${leagueRef.current.id}`,config)
        .then((res)=>{
            
            setLoading(false)
            
            setteams(res.data.response.map((r)=> r.team))
            
        })
        .catch((err)=>{
            alert(`${err.message} try again later.`)
            setLoading(false)
        })
    }
       

    function handleClick(league){
        teamRef.current = league
        navigate("/infos")
    }
    
    return (
        <Home>
            <Container>

                <h2>Selecionar Time:</h2>
                <div className="options">
                    {loading && <ThreeDots height="50" width="70" radius="20" color="#212A3E"/>}
                    {!loading && teams?.map((c,i)=><div key={i} onClick={()=>handleClick(c)}><img src={c.logo}/><p>{c.name}</p></div>)}
                    {teams?.length === 0 && !loading && <h3>Nenhum time encontrado</h3>}
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