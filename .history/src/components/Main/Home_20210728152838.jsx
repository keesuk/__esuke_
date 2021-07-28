import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../css/_Theme.jsx";


const HomeButton = styled.button`
    background-color: black;
    height: 2rem;
    position: fixed;
    box-sizing: border-box;
    z-index: 3;
    left: -3rem;
    top: 0;
    left: ${theme.layoutRatio["sub"]}%;
    
    div {
        display: flex;  
        font-size: 1rem;
        font-weight: 500;
        width: 100%;
        justify-content: center;
        align-items: center;
        letter-spacing: -.01rem;
        mark {
            display: inline-block; 
            height: 1.2rem;
            line-height: 1rem;
            padding-top: -1;
            padding-left: 1px;
            padding-right: 1px;
            background-color: black;
            color: white;
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
                <div><mark>Home</mark></div>
            </HomeButton>
        </Link>
    )
}
export default Home;