import { styled } from "styled-components"
import Home from "../components/Home"
import { AppContext } from "../context/AppContext"
import { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from  'react-loader-spinner'
import Select from 'react-select'


export default function League(){

    const { leagueRef, countryRef, config } = useContext(AppContext)
    const navigate = useNavigate()
    
    const sessionRef = useRef(null)
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
        if(sessionRef.current.length < 4){
            setInputError(true)
            return;
        } else if(inputError){
            setInputError(false)
        } 

        if(search.length >=3){

            setLoading(true)
            axios.get(`https://v3.football.api-sports.io/leagues?country=${countryRef.current}&season=${sessionRef.current}&search=${search}`,config)
            .then((res)=>{
                const data = {
                    "get": "leagues",
                    "parameters": {
                      "id": "39"
                    },
                    "errors": [],
                    "results": 1,
                    "paging": {
                      "current": 1,
                      "total": 1
                    },
                    "response": [
                      {
                        "league": {
                          "id": 39,
                          "name": "Premier League",
                          "type": "League",
                          "logo": "https://media.api-sports.io/football/leagues/2.png"
                        },
                        "country": {
                          "name": "England",
                          "code": "GB",
                          "flag": "https://media.api-sports.io/flags/gb.svg"
                        },
                        "seasons": [
                          {
                            "year": 2010,
                            "start": "2010-08-14",
                            "end": "2011-05-17",
                            "current": false,
                            "coverage": {
                              "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                              },
                              "standings": true,
                              "players": true,
                              "top_scorers": true,
                              "top_assists": true,
                              "top_cards": true,
                              "injuries": true,
                              "predictions": true,
                              "odds": false
                            }
                          },
                          {
                            "year": 2011,
                            "start": "2011-08-13",
                            "end": "2012-05-13",
                            "current": false,
                            "coverage": {
                              "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                              },
                              "standings": true,
                              "players": true,
                              "top_scorers": true,
                              "top_assists": true,
                              "top_cards": true,
                              "injuries": true,
                              "predictions": true,
                              "odds": false
                            }
                          }
                        ]
                      },
                      {
                        "league": {
                          "id": 39,
                          "name": "Europe League",
                          "type": "League",
                          "logo": "https://media.api-sports.io/football/leagues/3.png"
                        },
                        "country": {
                          "name": "England",
                          "code": "GB",
                          "flag": "https://media.api-sports.io/flags/gb.svg"
                        },
                        "seasons": [
                          {
                            "year": 2010,
                            "start": "2010-08-14",
                            "end": "2011-05-17",
                            "current": false,
                            "coverage": {
                              "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                              },
                              "standings": true,
                              "players": true,
                              "top_scorers": true,
                              "top_assists": true,
                              "top_cards": true,
                              "injuries": true,
                              "predictions": true,
                              "odds": false
                            }
                          },
                          {
                            "year": 2011,
                            "start": "2011-08-13",
                            "end": "2012-05-13",
                            "current": false,
                            "coverage": {
                              "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                              },
                              "standings": true,
                              "players": true,
                              "top_scorers": true,
                              "top_assists": true,
                              "top_cards": true,
                              "injuries": true,
                              "predictions": true,
                              "odds": false
                            }
                          }
                        ]
                      }
                    ]
                  }

                //passando data enquanto eu não posso fazer mais requisições.
                //trocar para res.data....
                setLoading(false)
                setLeagues(data.response.map((r)=> r.league))
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
                <input autoFocus type="number" placeholder="exemplo: 2014" required pattern="[0-9]{4}" onChange={(e)=>sessionRef.current = e.target.value} />
                {inputError && <small>Temporada deve ter 4 digítos!</small>}
                <h2>Selecionar Liga:</h2>
                <input autoFocus type="text" placeholder="exemplo: Premier League" onChange={handleChange}/>
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