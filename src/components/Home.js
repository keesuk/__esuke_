import { Link } from "react-router-dom"
import styled from "styled-components"
import React from "react"

import { scrollTrigger } from "../_data/_Functions"


const HomeButton = styled.div`
    ${({theme}) => theme.deskTop`
        left: -4rem;

        &:hover button {
            -webkit-filter: drop-shadow(0.1rem 0.1rem .1rem rgba(0,0,0,0.5));
            margin-left: 1.5rem;
        }
        
        &:hover .hoverOn {
            display: block;
        }
    `}
    ${({theme, scroll}) => theme.mobile` 
        left: ${scroll 
            ? "-5" 
            : "-7.5"
        }rem;
        transition: left .2s;
    `}
    position: fixed;
    width: 13rem;
    z-index: 100;
    top: 1rem;
    
    button {
        ${({theme}) => theme.deskTop`
            -webkit-filter: drop-shadow(0rem 0rem .04rem rgba(0,0,0,0.5));
        `};
        ${({theme, scroll}) => theme.mobile`
            -webkit-filter: ${scroll 
                ? "drop-shadow(-0.2rem 0.2rem 0.35rem rgba(0,0,0,0.4))" 
                : "drop-shadow(0rem 0rem 0.1rem rgba(0,0,0,0.4))"
            };
        `}
        background: radial-gradient(transparent 0rem, transparent .12rem, white .12rem, white);
        background-position: -4rem -4.2rem;
        background-color: transparent;
        background-size: .4rem .4rem;
        transition: all .2s;
        position: relative;
        text-align: center;
        margin-left: 0rem;
        padding: 1rem 0;
        font-weight: 300;
        font-size: 1rem;
        width: 100%;
        color: #4DC2DC;

        &:before {
            ${({theme}) => theme.mobile` border: .22rem dotted #4DC2DC;`}
            ${({theme}) => theme.deskTop``}
            border: .15rem dotted #4DC2DC;
            background-color: #A7EFFF;
            position: absolute;
            bottom: .25rem;
            right: .25rem;
            left: .25rem;
            content: "";
            z-index: -1;
            top: .25rem;
        }
    }

    &:active button {
        -webkit-filter: drop-shadow(0.05rem 0.05rem .04rem rgba(0,0,0,0.5));
        margin-left: 1rem;
    }

    .hoverOn {
        padding: .2rem .15rem .2rem .15rem;
        background-color: black;
        position: absolute;
        font-size: 1.2rem;
        line-height: 1rem;
        display: none;
        left: 15.5rem;
        color: white;
        top: .4rem;
    }
`

const Home = ({scroll}) => {
    
    return(
        <Link to="/">
            <HomeButton
                scroll={scrollTrigger(scroll, 240)}
            >
                <button>❋∵◇❋∵◇❋∵◇❋∵◇❋∵◇❋∵◇❋</button>
                <div className="hoverOn">
                    Home
                </div>
            </HomeButton>
        </Link>
    )
}
export default Home