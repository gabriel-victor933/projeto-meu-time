import { useEffect, useState, useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../context/AppContext"
import Home from "../components/Home"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Infos(){

    const [jogadores,setJogadores] = useState(null)
    const [loading,setLoading] = useState(false)
    const [lineups, setLineups] = useState([])
    const [fixtures, setFixtures] = useState({})
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
        

        setJogadores(playersEx.map((p)=> p.player))

        /*  axios.get(`https://v3.football.api-sports.io/players?
        team=${teamRef.current.id}&league=${leagueRef.current.id}&season=${seasonRef.current}`,config)
        .then((res)=>{
            
            console.log(res)
            setJogadores(res.data.response.map((p)=> p.player))
        })
        .catch((err)=>{
            alert(`${err.message} try again later.`)
            setLoading(false)
        }) */
    }

    function getStats(){
         
        setLineups(lineupsEx)
        setFixtures(fixturesEx)
         /* axios.get(`https://v3.football.api-sports.io/teams/statistics?season=${seasonRef.current}&
         team=${teamRef.current.id}&league=${leagueRef.current.id}`,config)
        .then((res)=>{
            
            console.log(res)
            setLineups(res.data.response.lineups)
            setJogadores(res.data.response.fixtures)
        })
        .catch((err)=>{
            alert(`${err.message} try again later.`)
            setLoading(false)
        }) */
    }


    console.log(jogadores)

    return (
        <Home>
        <Container>

            <h2>Jogadores:</h2>
            <div className="options">
                {loading && <ThreeDots height="50" width="70" radius="20" color="#212A3E"/>}
               {!loading && jogadores?.map((c,i)=><div key={i}><img src={c.photo}/><p>{c.name}</p><small>{c.birth.country}</small></div>)}
                {jogadores?.length === 0 && !loading && <h3>Nenhum liga encontrada</h3>}  
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

`



const fixturesEx = {
    "played": {
        "home": 19,
        "away": 19,
        "total": 38
    },
    "wins": {
        "home": 8,
        "away": 5,
        "total": 13
    },
    "draws": {
        "home": 7,
        "away": 5,
        "total": 12
    },
    "loses": {
        "home": 4,
        "away": 9,
        "total": 13
    }
}

const lineupsEx = [
    {
        "formation": "4-2-3-1",
        "played": 31
    },
    {
        "formation": "4-4-2",
        "played": 4
    },
    {
        "formation": "4-1-4-1",
        "played": 2
    },
    {
        "formation": "4-3-3",
        "played": 1
    }
]

const playersEx = [
    {
        "player": {
            "id": 9888,
            "name": "Elias",
            "firstname": "Elias",
            "lastname": "Mendes Trindade",
            "age": 36,
            "birth": {
                "date": "1985-05-16",
                "place": "São Paulo",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "173 cm",
            "weight": "75 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/9888.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-1.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-1.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-1.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 33,
                    "lineups": 33,
                    "minutes": 2873,
                    "number": null,
                    "position": "Midfielder",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 0,
                    "out": 9,
                    "bench": 1
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 7,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 9,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 10553,
            "name": "Leandro Castán da Silva",
            "firstname": "Leandro",
            "lastname": "Castán da Silva",
            "age": 36,
            "birth": {
                "date": "1986-11-05",
                "place": "Jaú",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "186 cm",
            "weight": "80 kg",
            "injured": false,
            "photo": "https://media-2.api-sports.io/football/players/10553.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-3.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-1.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-3.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 12,
                    "lineups": 7,
                    "minutes": 696,
                    "number": null,
                    "position": "Defender",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 5,
                    "out": 0,
                    "bench": 18
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 1,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 2,
                    "yellowred": 0,
                    "red": 1
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 114499,
            "name": "Anderson Sebastião Cardoso",
            "firstname": "Anderson Sebastião",
            "lastname": "Cardoso",
            "age": 35,
            "birth": {
                "date": "1981-06-03",
                "place": "Mogi Guaçu",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "180 cm",
            "weight": "81 kg",
            "injured": false,
            "photo": "https://media-2.api-sports.io/football/players/114499.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-3.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-1.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-2.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 25,
                    "lineups": 24,
                    "minutes": 2124,
                    "number": null,
                    "position": "Defender",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 1,
                    "out": 2,
                    "bench": 1
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 1,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 7,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 114468,
            "name": "Rodrigo de Souza Cardoso",
            "firstname": "Rodrigo",
            "lastname": "de Souza Cardoso",
            "age": 36,
            "birth": {
                "date": "1982-03-04",
                "place": "Rio de Janeiro",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "183 cm",
            "weight": "85 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/114468.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-2.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-3.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-2.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 12,
                    "lineups": 5,
                    "minutes": 561,
                    "number": null,
                    "position": "Attacker",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 7,
                    "out": 4,
                    "bench": 14
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 2,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 4,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 9956,
            "name": "Jucilei da Silva",
            "firstname": "Jucilei",
            "lastname": "da Silva",
            "age": 33,
            "birth": {
                "date": "1988-04-06",
                "place": "São Luís do Paraitinga",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "185 cm",
            "weight": "79 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/9956.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-3.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-1.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-3.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 34,
                    "lineups": 31,
                    "minutes": 2846,
                    "number": null,
                    "position": "Midfielder",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 3,
                    "out": 1,
                    "bench": 5
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 2,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 5,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 115684,
            "name": "Pedro Iarley Lima Dantas",
            "firstname": "Pedro Iarley",
            "lastname": "Lima Dantas",
            "age": 42,
            "birth": {
                "date": "1974-03-29",
                "place": "Quixeramobim",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "171 cm",
            "weight": "69 kg",
            "injured": false,
            "photo": "https://media-3.api-sports.io/football/players/115684.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-1.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-2.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-3.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 33,
                    "lineups": 25,
                    "minutes": 2161,
                    "number": null,
                    "position": "Attacker",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 8,
                    "out": 15,
                    "bench": 13
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 8,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 1,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 114543,
            "name": "Alessandro Mori Nunes",
            "firstname": "Alessandro Mori",
            "lastname": "Nunes",
            "age": 35,
            "birth": {
                "date": "1979-01-10",
                "place": "Assis Chateaubriand",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "179 cm",
            "weight": "77 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/114543.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-3.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-2.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-2.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 31,
                    "lineups": 31,
                    "minutes": 2618,
                    "number": null,
                    "position": "Defender",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 0,
                    "out": 4,
                    "bench": 0
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 0,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 4,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 115705,
            "name": "William Morais",
            "firstname": "William Francis",
            "lastname": "de Oliveira Morais",
            "age": 30,
            "birth": {
                "date": "1991-03-01",
                "place": "São Paulo",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "188 cm",
            "weight": null,
            "injured": false,
            "photo": "https://media-2.api-sports.io/football/players/115705.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-3.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-2.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-2.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 8,
                    "lineups": 0,
                    "minutes": 175,
                    "number": null,
                    "position": "Midfielder",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 8,
                    "out": 0,
                    "bench": 15
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 1,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 1,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 115704,
            "name": "William Machado de Oliveira",
            "firstname": "William",
            "lastname": "Machado de Oliveira",
            "age": 37,
            "birth": {
                "date": "1976-08-24",
                "place": "Belo Horizonte",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "189 cm",
            "weight": "81 kg",
            "injured": false,
            "photo": "https://media-3.api-sports.io/football/players/115704.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-1.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-1.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-2.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 32,
                    "lineups": 32,
                    "minutes": 2787,
                    "number": null,
                    "position": "Defender",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 0,
                    "out": 3,
                    "bench": 0
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 1,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 8,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 114653,
            "name": "Anderson Simas Luciano",
            "firstname": "Anderson",
            "lastname": "Simas Luciano",
            "age": 37,
            "birth": {
                "date": "1976-11-4",
                "place": "Curitiba",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "180 cm",
            "weight": "77 kg",
            "injured": false,
            "photo": "https://media-2.api-sports.io/football/players/114653.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-2.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-3.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-2.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 5,
                    "lineups": 0,
                    "minutes": 82,
                    "number": null,
                    "position": "Midfielder",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 5,
                    "out": 0,
                    "bench": 10
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 0,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 1,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 9609,
            "name": "Danilo Gabriel de Andrade",
            "firstname": "Danilo Gabriel",
            "lastname": "de Andrade",
            "age": 40,
            "birth": {
                "date": "1979-06-11",
                "place": "São Gotardo",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "186 cm",
            "weight": "80 kg",
            "injured": false,
            "photo": "https://media-3.api-sports.io/football/players/9609.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-3.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-2.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-1.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 31,
                    "lineups": 10,
                    "minutes": 1266,
                    "number": null,
                    "position": "Midfielder",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 21,
                    "out": 5,
                    "bench": 24
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 2,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 3,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 115815,
            "name": "Aldo Antonio Bobadilla Avalos",
            "firstname": "Aldo Antonio",
            "lastname": "Bobadilla Avalos",
            "age": 37,
            "birth": {
                "date": "1976-04-20",
                "place": "Pedro Juan Caballero",
                "country": "Paraguay"
            },
            "nationality": "Paraguay",
            "height": "194 cm",
            "weight": "87 kg",
            "injured": false,
            "photo": "https://media-2.api-sports.io/football/players/115815.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-1.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-3.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-3.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 0,
                    "lineups": 0,
                    "minutes": 0,
                    "number": null,
                    "position": "Goalkeeper",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 0,
                    "out": 0,
                    "bench": 17
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 0,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 0,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 115639,
            "name": "Ronaldo",
            "firstname": "Ronaldo Luíz",
            "lastname": "Nazário de Lima",
            "age": 45,
            "birth": {
                "date": "1976-09-22",
                "place": "Rio de Janeiro",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "183 cm",
            "weight": "90 kg",
            "injured": false,
            "photo": "https://media-3.api-sports.io/football/players/115639.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-3.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-1.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-1.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 11,
                    "lineups": 11,
                    "minutes": 857,
                    "number": null,
                    "position": "Attacker",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 0,
                    "out": 3,
                    "bench": 0
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 6,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 1,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 115711,
            "name": "Eduardo Cesar Daude Gaspar",
            "firstname": "Eduardo Cesar",
            "lastname": "Daude Gaspar",
            "age": 35,
            "birth": {
                "date": "1978-05-15",
                "place": "SÃ£o Paulo",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "189 cm",
            "weight": "85 kg",
            "injured": false,
            "photo": "https://media-3.api-sports.io/football/players/115711.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-2.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-2.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-2.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 4,
                    "lineups": 1,
                    "minutes": 92,
                    "number": null,
                    "position": "Midfielder",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 3,
                    "out": 1,
                    "bench": 20
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 0,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 1,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 26983,
            "name": "M. Defederico",
            "firstname": "Matías Adrián",
            "lastname": "Defederico",
            "age": 32,
            "birth": {
                "date": "1989-08-23",
                "place": "Buenos Aires",
                "country": "Argentina"
            },
            "nationality": "Argentina",
            "height": "169 cm",
            "weight": "69 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/26983.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-1.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-3.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-3.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 18,
                    "lineups": 3,
                    "minutes": 518,
                    "number": null,
                    "position": "Midfielder",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 15,
                    "out": 3,
                    "bench": 19
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 1,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 3,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 92430,
            "name": "Elias Fernandes de Oliveira",
            "firstname": "Elias",
            "lastname": "Fernandes de Oliveira",
            "age": 30,
            "birth": {
                "date": "1992-05-22",
                "place": "São Bernardo do Campo",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "175 cm",
            "weight": "67 kg",
            "injured": false,
            "photo": "https://media-2.api-sports.io/football/players/92430.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-3.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-3.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-1.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 0,
                    "lineups": 0,
                    "minutes": 0,
                    "number": null,
                    "position": "Attacker",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 0,
                    "out": 0,
                    "bench": 1
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 0,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 0,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 44481,
            "name": "Renato Chávez",
            "firstname": "Renato",
            "lastname": "de Araújo Chávez Júnior",
            "age": 32,
            "birth": {
                "date": "1990-05-04",
                "place": "São Paulo",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "185 cm",
            "weight": "79 kg",
            "injured": false,
            "photo": "https://media-3.api-sports.io/football/players/44481.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-1.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-3.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-3.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 0,
                    "lineups": 0,
                    "minutes": 0,
                    "number": null,
                    "position": "Defender",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 0,
                    "out": 0,
                    "bench": 3
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 0,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 0,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 689,
            "name": "Dentinho",
            "firstname": "Bruno",
            "lastname": "Ferreira Bonfim",
            "age": 33,
            "birth": {
                "date": "1989-01-19",
                "place": "São Paulo",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "176 cm",
            "weight": "75 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/689.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-3.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-2.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-3.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 17,
                    "lineups": 16,
                    "minutes": 1129,
                    "number": null,
                    "position": "Midfielder",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 1,
                    "out": 12,
                    "bench": 1
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 2,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 3,
                    "yellowred": 0,
                    "red": 1
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 9449,
            "name": "Júlio César",
            "firstname": "Júlio César",
            "lastname": "de Souza Santos",
            "age": 38,
            "birth": {
                "date": "1984-10-27",
                "place": "São Paulo",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "186 cm",
            "weight": "82 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/9449.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-2.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-1.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-1.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 31,
                    "lineups": 31,
                    "minutes": 2790,
                    "number": null,
                    "position": "Goalkeeper",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 0,
                    "out": 0,
                    "bench": 7
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 0,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 1,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    },
    {
        "player": {
            "id": 80340,
            "name": "Rafael Aparecido da Silva",
            "firstname": "Rafael",
            "lastname": "Aparecido da Silva",
            "age": 33,
            "birth": {
                "date": "1990-04-07",
                "place": "São Paulo",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "179 cm",
            "weight": "73 kg",
            "injured": false,
            "photo": "https://media-3.api-sports.io/football/players/80340.png"
        },
        "statistics": [
            {
                "team": {
                    "id": 131,
                    "name": "Corinthians",
                    "logo": "https://media-1.api-sports.io/football/teams/131.png"
                },
                "league": {
                    "id": 71,
                    "name": "Serie A",
                    "country": "Brazil",
                    "logo": "https://media-3.api-sports.io/football/leagues/71.png",
                    "flag": "https://media-2.api-sports.io/flags/br.svg",
                    "season": 2010
                },
                "games": {
                    "appearences": 8,
                    "lineups": 2,
                    "minutes": 346,
                    "number": null,
                    "position": "Midfielder",
                    "rating": null,
                    "captain": false
                },
                "substitutes": {
                    "in": 6,
                    "out": 1,
                    "bench": 13
                },
                "shots": {
                    "total": null,
                    "on": null
                },
                "goals": {
                    "total": 1,
                    "conceded": null,
                    "assists": null,
                    "saves": null
                },
                "passes": {
                    "total": null,
                    "key": null,
                    "accuracy": null
                },
                "tackles": {
                    "total": null,
                    "blocks": null,
                    "interceptions": null
                },
                "duels": {
                    "total": null,
                    "won": null
                },
                "dribbles": {
                    "attempts": null,
                    "success": null,
                    "past": null
                },
                "fouls": {
                    "drawn": null,
                    "committed": null
                },
                "cards": {
                    "yellow": 3,
                    "yellowred": 0,
                    "red": 0
                },
                "penalty": {
                    "won": null,
                    "commited": null,
                    "scored": null,
                    "missed": null,
                    "saved": null
                }
            }
        ]
    }
]