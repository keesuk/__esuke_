import { Link } from "react-router-dom"
import styled from "styled-components"
import React from "react"

import { scrollTrigger } from "../../_data/_Functions"


const HomeButton = styled.div`
    ${({theme}) => theme.deskTop`
        left: ${({theme}) => theme.layoutRatio["sub"]}%;
        z-index: 1;
        top: 0;

        &:hover button {
            -webkit-filter: drop-shadow(0.1rem 0.1rem .1rem rgba(0,0,0,0.5));
            margin-left: -6rem;
        }
        &:hover .hoverOn {
            padding: .2rem .15rem .2rem .15rem;
            background-color: black;
            position: absolute;
            font-size: 1.2rem;
            line-height: 1rem;
            display: block;
            color: white;
            right: 17rem;
            top: .4rem;
        }
    `}
    ${({theme, scroll}) => theme.mobile` 
        ${scroll 
            ? "left: 3rem;" 
            : "left: 1.6rem;"
        };
        transform-origin: left top;
        transform: scaleX(-1);
        transition: all .2s;
        color: transparent;
        z-index: 1000000;
        top: 1rem;
    `}
    box-sizing: border-box;
    position: fixed;
    width: 10rem;
    height: 0rem;
    
    button {
        ${({theme, scroll}) => theme.mobile`
            -webkit-filter: ${scroll 
                ? "drop-shadow(-0.2rem 0.2rem 0.35rem rgba(0,0,0,0.4))" 
                : "drop-shadow(0rem 0rem 0.1rem rgba(0,0,0,0.4))"
            };
            font-size: 1rem;
            padding: .8rem;
        `}
        ${({theme}) => theme.deskTop`
            -webkit-filter: drop-shadow(0rem 0rem .04rem rgba(0,0,0,0.5));
            font-size: .8rem;
            padding: .6rem;
        `}
        background: radial-gradient(transparent 0rem, transparent .12rem, white .12rem, white);
        background-position: -4.2rem -4.2rem;
        background-size: .4rem .4rem;
        background-color: white;
        box-sizing: border-box;
        transition: all .2s;
        margin-left: -4rem;
        position: relative;
        font-weight: 300;
        width: 100%;
        color: #4DC2DC;

        &:before {
            ${({theme}) => theme.mobile` border: .22rem dotted #4DC2DC;`}
            ${({theme}) => theme.deskTop`border: .15rem dotted #4DC2DC;`}
            background-color: #A7EFFF;
            position: absolute;
            bottom: .2rem;
            right: .2rem;
            left: .2rem;
            content: "";
            z-index: -1;
            top: .2rem;
        }
    }
    &:active button {
        -webkit-filter: drop-shadow(0.02rem 0.02rem .02rem rgba(0,0,0,0.5));
        margin-left: -5.5rem;
    }
`

const Home = ({scroll}) => {
    
    return(
        <Link to="/">
            <HomeButton
                scroll={scrollTrigger(scroll, 240)}
            >
                <button>❋∵◇❋∵◇❋∵◇❋∵◇❋</button>
                <div className="hoverOn">
                    Home
                </div>
            </HomeButton>
        </Link>
    )
}
export default Home