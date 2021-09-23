import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { scrollTrigger } from "../../_data/_Functions";

const HomeButton = styled.div`
    ${({theme}) => theme.mobile`
        top: 1rem;
        left: 1.8rem;
        transform: scaleX(-1);
        transform-origin: left top;
        color: transparent;
        z-index: 1000000;
    `}
    ${({theme}) => theme.deskTop`
        top: 0;
        left: ${({theme}) => theme.layoutRatio["sub"]}%;
        z-index: 1;

        &:hover button {
            margin-left: -6rem;
            -webkit-filter: drop-shadow(0.1rem 0.1rem .1rem rgba(0,0,0,0.5));
        }
        &:hover .hoverOn {
            display: block;
            position: absolute;
            background-color: black;
            color: white;
            font-size: 1.2rem;
            line-height: 1rem;
            padding: .2rem .15rem .2rem .15rem;
            right: 17rem;
            top: .4rem;
        }
    `}
    height: 0rem;
    position: fixed;
    box-sizing: border-box;
    width: 10rem;
    
    button {
        ${({theme, scroll}) => theme.mobile`
            padding: .8rem;
            font-size: 1rem;
            -webkit-filter: ${scroll 
                ? "drop-shadow(-0.2rem 0.2rem 0.35rem rgba(0,0,0,0.4))" 
                : "drop-shadow(0rem 0rem 0.1rem rgba(0,0,0,0.4))"
            };
        `}
        ${({theme}) => theme.deskTop`
            padding: .6rem;
            font-size: .8rem;
            -webkit-filter: drop-shadow(0rem 0rem .04rem rgba(0,0,0,0.5));
        `}
        margin-left: -4rem;
        position: relative;
        width: 100%;
        font-weight: 300;
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
            ${({theme}) => theme.mobile` border: .2rem dotted #4DC2DC;`}
            ${({theme}) => theme.deskTop`border: .15rem dotted #4DC2DC;`}
            z-index: -1;
            top: .2rem;
            bottom: .2rem;
            left: .2rem;
            right: .2rem;
        }
    }
    &:active button {
        margin-left: -5.5rem;
        -webkit-filter: drop-shadow(0.02rem 0.02rem .02rem rgba(0,0,0,0.5));
    }
`;

const Home = ({scroll}) => {
    return(
        <Link to="/">
            <HomeButton
                scroll={scrollTrigger(scroll, 220)}
            >
                <button>❋∵◇❋∵◇❋∵◇❋∵◇❋</button>
                <div className="hoverOn">
                    Home
                </div>
            </HomeButton>
        </Link>
    )
}
export default Home;