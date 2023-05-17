import { createGlobalStyle } from "styled-components";
import back from "../assets/41290.jpg"

const Global = createGlobalStyle`
    
    :root {
        --global-primary-color: #F1F6F9;
        --global-secondary-color: #394867;
        --global-tertiary-color: #212A3E;
        --global-quaternary-color: #212A3E;

        --title-font: "Open Sans";
        --text-font: "Verdana";

        --title-primary-size: 40px;
        --title-secondary-size: 32px;
        --title-tertiary-size: 26px;
        --title-quartenary-size: 22px;
        --paragraph-size: 18px;
        --small-text-size: 14px;

        --sm-width: 420px;

    }
    * {
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;
        background-image: url(${back});
        background-size: cover;
    }

    
`

export default Global;