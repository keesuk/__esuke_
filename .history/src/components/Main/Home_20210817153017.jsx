import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../css/_Theme.jsx";


const HomeButton = styled.div`
    height: 0rem;
    position: fixed;
    box-sizing: border-box;
    z-index: 1;
    width: 10rem;
    top: 0;
    left: ${theme.layoutRatio["sub"]}%;
    
    button {
        margin-left: -4rem;
        position: relative;
        padding: .6rem;
        width: 100%;
        font-size: .8rem;
        font-weight: 300;
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
        transition: all .2s;

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

    &:hover button {
        margin-left: -6rem;
        -webkit-filter: drop-shadow(0.1rem 0.1rem .1rem rgba(0,0,0,0.5));
    }
    &:active button {
        margin-left: -5.5rem;
        -webkit-filter: drop-shadow(0.02rem 0.02rem .02rem rgba(0,0,0,0.5));
    }

    &:hover .hoverOn {
        display: block;
        position: absolute;
        padding: 0rem .05rem;
        background-color: black;
        color: white;
        font-size: 1.2rem;
        right: 17rem;
        top: .4rem;
    }
`;

const Home = () => {
    return(
        <Link to="/">
            <HomeButton>
                <button>❋∵◇❋∵◇❋∵◇❋∵◇❋</button>
                <div className="hoverOn">
                    Home
                </div>
            </HomeButton>
        </Link>
    )
}
export default Home;