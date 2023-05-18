import { styled } from "styled-components"
import Home from "../components/Home"
import { AppContext } from "../context/AppContext"
import { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from  'react-loader-spinner'
import Select from 'react-select'


export default function Team(){

    const { leagueRef, countryRef, teamRef, config } = useContext(AppContext)
    const navigate = useNavigate()
    
    const sessionRef = useRef(null)

    const [teams,setteams] = useState(null)
    const [loading, setLoading] = useState(false)



    useEffect(()=>{
        console.log(leagueRef,countryRef)
        if(localStorage.getItem("key") == null){
            navigate("/")
        }
        if(leagueRef.current == null){
            navigate("/league")
        }
    },[])

    function handleChange(e){

        const search = e.target.value

        if(search.length >=3){

            setLoading(true)
            axios.get(`https://v3.football.api-sports.io/teams?country=${countryRef.current}&season=${sessionRef.current}&league=${leagueRef.current}&search=${search}`,config)
            .then((res)=>{
                
                const data = {
                    "get": "teams",
                    "parameters": {
                      "id": "33"
                    },
                    "errors": [],
                    "results": 1,
                    "paging": {
                      "current": 1,
                      "total": 1
                    },
                    "response": [
                      {
                        "team": {
                          "id": 33,
                          "name": "Manchester United",
                          "code": "MUN",
                          "country": "England",
                          "founded": 1878,
                          "national": false,
                          "logo": "https://media.api-sports.io/football/teams/33.png"
                        },
                        "venue": {
                          "id": 556,
                          "name": "Old Trafford",
                          "address": "Sir Matt Busby Way",
                          "city": "Manchester",
                          "capacity": 76212,
                          "surface": "grass",
                          "image": "https://media.api-sports.io/football/venues/556.png"
                        }
                      },
                      {
                        "team": {
                          "id": 33,
                          "name": "Newcastle",
                          "code": "MUN",
                          "country": "England",
                          "founded": 1878,
                          "national": false,
                          "logo": "https://media.api-sports.io/football/teams/34.png"
                        },
                        "venue": {
                          "id": 556,
                          "name": "Old Trafford",
                          "address": "Sir Matt Busby Way",
                          "city": "Manchester",
                          "capacity": 76212,
                          "surface": "grass",
                          "image": "https://media.api-sports.io/football/venues/556.png"
                        }
                      }
                    ]
                  }

                //passando data enquanto eu não posso fazer mais requisições.
                //trocar para res.data....
                setLoading(false)
                setteams(data.response.map((r)=> r.team))
            })
            .catch((err)=>{
                alert(`${err.message} try again later.`)
                setLoading(false)
            })

        }
    }
    

    function handleClick(league){
        teamRef.current = league
        console.log(teamRef)
    }
    
    return (
        <Home>
            <Container>

                <h2>Selecionar Time:</h2>
                <input autoFocus type="text" placeholder="exemplo: Manchester City" onChange={handleChange}/>
                <div className="options">
                    {loading && <ThreeDots height="50" width="70" radius="20" color="#212A3E"/>}
                    {!loading && teams?.map((c,i)=><div key={i} onClick={()=>handleClick(c)}><img src={c.logo}/><p>{c.name}</p></div>)}
                    {teams?.length === 0 && !loading && <h3>Nenhum liga encontrada</h3>}
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