import { useEffect, useState, useContext, useMemo } from "react"
import styled from "styled-components"
import { AppContext } from "../context/AppContext"
import Home from "../components/Home"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Table from "../components/Table"
import Charts from "../components/Chart"
import { ThreeDots } from  'react-loader-spinner'

export default function Infos(){

    const [jogadores,setJogadores] = useState(null)
    const [loading,setLoading] = useState(false)
    const [loadInfos,setLoadInfos] = useState(false)
    const [lineups, setLineups] = useState([])
    const [fixtures, setFixtures] = useState({})
    const [statistics, setStatistics] = useState([])
    const navigate = useNavigate()

    const {countryRef, leagueRef, teamRef, seasonRef,config} = useContext(AppContext)

    useEffect(()=>{
        
        if(localStorage.getItem("key") == null){
            navigate("/")
        }
        if(countryRef.current == null){
            navigate("/country")
        } else if(leagueRef.current == null){
            navigate("/league")
        } else if(teamRef.current == null) {
            navigate("/team")
        } else {
            getPlayers()
            getStats()
        }

    },[])

    function getPlayers(){

        axios.get(`${import.meta.env.VITE_APP_API_URL}/players?
        team=${teamRef.current.id}&league=${leagueRef.current.id}&season=${seasonRef.current}`,config)
        .then((res)=>{
            
            setJogadores(res.data.response.map((p)=> p.player))
        })
        .catch((err)=>{
            alert(`${err.message} try again later.`)
            setLoading(false)
        })
    }

    function getStats(){

        setLoadInfos(true)

         axios.get(`${import.meta.env.VITE_APP_API_URL}/teams/statistics?season=${seasonRef.current}&
         team=${teamRef.current.id}&league=${leagueRef.current.id}`,config)
        .then((res)=>{
            
            setLineups(res.data.response.lineups)
            setFixtures(res.data.response.fixtures)
            setStatistics(res.data.response.goals.for.minute)
            setLoadInfos(false)
        })
        .catch((err)=>{
            alert(`${err.message} try again later.`)
            setLoadInfos(false)
        }) 
    }

    const columns = [
        {
            Header: "Partidas Jogadas",
            columns: [
                
                {
                    Header: "casa",
                    accessor: "played.home"
                },
                {
                    Header: "fora",
                    accessor: "played.away"
                },
                {
                    Header: "total",
                    accessor: "played.total"
                }
            ]
        },
        {
            Header: "Vitórias",
            columns: [
                
                {
                    Header: "casa",
                    accessor: "wins.home"
                },
                {
                    Header: "fora",
                    accessor: "wins.away"
                },
                {
                    Header: "total",
                    accessor: "wins.total"
                }
            ]
        },{
            Header: "Derrotas",
            columns: [
                
                {
                    Header: "casa",
                    accessor: "loses.home"
                },
                {
                    Header: "fora",
                    accessor: "loses.away"
                },
                {
                    Header: "total",
                    accessor: "loses.total"
                }
            ]
        },{
            Header: "Empates",
            columns: [
                
                {
                    Header: "casa",
                    accessor: "draws.home"
                },
                {
                    Header: "fora",
                    accessor: "draws.away"
                },
                {
                    Header: "total",
                    accessor: "draws.total"
                }
            ]
        }
    ]
    
    return (
        <Home>
        <Container>

            <h2>Jogadores:</h2>
            <div className="options">
                {loading && <ThreeDots height="50" width="70" radius="20" color="#212A3E"/>}
               {!loading && jogadores?.map((c,i)=><div key={i}><img src={c.photo}/><p>{c.name}</p><small>{c.birth.country}</small></div>)}
                {jogadores?.length === 0 && !loading && <h3>Nenhum Jogador encontrada</h3>}  
            </div>
            <h2>formações:</h2>
            {lineups.length === 0 ? <p>sem informações.</p>: lineups?.map((line,i) => {
            return (<div className="formation" key={i}> 
                <p>formação: {line.formation}</p>
                <p>N° partidas: {line.played}</p>
            </div>)
        })}
        <h2>Resultados:</h2>

        {!loadInfos  && <Table fixtures={fixtures} columns={columns}/>}
        {loadInfos && <ThreeDots height="50" width="70" radius="20" color="#212A3E"/>}
        <h2>Gols marcados por tempo de jogo:</h2>
        {!loadInfos && <Charts statistics={statistics}/>}
        {loadInfos && <ThreeDots height="50" width="70" radius="20" color="#212A3E"/>}
        </Container>
    </Home>
    )
}

const Container = styled.div`

    padding: 10px;
    
    

    h2 {
        font-size: var(--title-secondary-size);
        margin-top: 30px;
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
        margin-bottom: 30px;
        

        h3 {
            font-size: var(--title-quaternary-size);
        }
        
        div {
            width: 90px;
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

    .formation {
        display: flex;
        width: 100%;
        
        
        p {
            margin: 15px;
            font-size: var(--title-quartenary-size)
        }

    }

`

