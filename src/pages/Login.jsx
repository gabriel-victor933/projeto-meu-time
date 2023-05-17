import styled from "styled-components"
import img from "../assets/football.png"

export default function Login(){
    
    return (
        <Block>
            <img src={img}/>
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

    display: flex;

    img {
        width: 30%;
        aspect-ratio: auto;
    }
`