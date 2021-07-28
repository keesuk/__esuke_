import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../css/_Theme.jsx";

const FolioCell = styled.div`
`;
const HomeButton = styled.button`
    height: 0rem;
    position: fixed;
    box-sizing: border-box;
    z-index: 1;
    margin-left: -4rem;
    width: 10rem;
    top: 0;
    left: ${theme.layoutRatio["sub"]}%;
    transition: all .2s;
    
    div {
        position: relative;
        padding: .6rem;
        width: 100%;
        font-size: 2.5rem;
        font-weight: 500;
        -webkit-filter: drop-shadow(0rem 0rem .04rem rgba(0,0,0,0.5));
        background-color: white;
        background: radial-gradient(
            transparent 0rem, 
            transparent .12rem, 
            white .12rem,
            white
        );
        background-size: .4rem .4rem;
        background-position: -4.2rem -4.2rem;
        box-sizing: border-box;
        color: #4DC2DC;

        &:before {
            content: "";
            position: absolute;
            background-color: #A7EFFF;
            border: 2.5px dotted #4DC2DC;
            z-index: -1;
            top: .2rem;
            bottom: .2rem;
            left: .2rem;
            right: .2rem;
        }
    }

    &:hover {
        margin-left: -8rem;
    }
    &:active {
        margin-left: -7.5rem;
    }
`;

const Home = () => {
    return(
        <Link to="/">
            <HomeButton>
                <div>▴</div>
            </HomeButton>
        </Link>
    )
}
export default Home;