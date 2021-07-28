import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../css/_Theme.jsx";

const FolioCell = styled.div`
`;
const HomeButton = styled.button`
    height: 2rem;
    position: fixed;
    box-sizing: border-box;
    z-index: 1;
    margin-left: -5rem;
    width: 4rem;
    top: 0;
    left: ${theme.layoutRatio["sub"]}%;
    
    div {
        position: relative;
        padding: .4rem;
        width: 100%;
        font-size: .9rem;
        font-weight: 600;
        -webkit-filter: drop-shadow(.12rem .1rem .12rem rgba(0,0,0,0.6));
        background-color: white;
        background: radial-gradient(
            transparent 0rem, 
            transparent .15rem, 
            white .15rem,
            white
        );
        background-size: .4rem .4rem;
        background-position: -4.2rem -4.2rem;
        color: white;

        &:before {
            content: "";
            position: absolute;
            background-color: skyblue;
            border: 1px solid blue;
            z-index: -1;
            top: .22rem;
            bottom: .22rem;
            left: .22rem;
            right: .22rem;
        }
    }
    &:after { 
        content: "";
        position: absolute;
        z-index: 1000;
        height: .15rem;
        left:30%;
        right: 30%;
        bottom: 50%;
        visibility: hidden;
        background: ${theme.colorObjs["homeButtonHover"]};
    }
    &:hover:after { 
        visibility: visible;
    }
`;

const Home = () => {
    return(
        <Link to="/">
            <HomeButton>
                <div>home</div>
            </HomeButton>
        </Link>
    )
}
export default Home;