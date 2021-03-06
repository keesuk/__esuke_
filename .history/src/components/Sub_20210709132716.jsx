import React from 'react';
import styled from "styled-components";
import { Link, Route } from "react-router-dom";

import theme from "../css/_Theme.jsx"


const LeftInDiv = styled.div`
    margin-left: 6%;
    margin-right: 6%;
    margin-top: -2.2rem;
    display: grid;
    .title {
        width: 100%;
        font-weight: 500;
        font-size: 1.1rem;
        letter-spacing: -.02rem;
        margin-top: 2rem;
        padding-bottom: .8rem;
        margin-bottom: .6rem;
        border-bottom: .1rem dashed #000000;
    }
`;
const StickerDiv = styled.div`
    margin-top: 1rem;
    background-color: ${theme.colorObjs["subTagBackColor"]};
    justify-self: start;
    margin-left: 20%;
    width: 72%;
    padding: .1rem;
    border-radius: .5rem;
    position: relative;
    border: ${theme.lines["subTagLineBold"]};
    &:before {
        content: "";
        display: block;
        height: 4.6rem;
        border-radius: .2rem;
        border: ${theme.lines["subTagLineLight"]};
    } 
    &:hover {
        border: .22rem solid ${({hoverColor}) => hoverColor};
        transform: rotate(${({rotate}) => rotate}deg);
        z-index: 100;
    }
    &:hover:before {
        border: .1rem solid ${({hoverColor}) => hoverColor};
    }  
    .stkContentExp {
        margin-left: 10%;
        margin-right: 10%;
        position: absolute;
        top: .5rem;
        bottom: .5rem;
        line-height: 1rem;
        font-size: .6rem;
        font-style: italic;
        font-weight: 400;
        strong {
            margin-left: -5%;
            margin-right: 3%;
            font-weight: 600;
            font-size: .6rem;
            font-family: 'IBM Plex Mono', monospace;
        }
    }
    .stkContentList {
        margin-left: 20%;
        position: absolute;
        top: .5rem;
        bottom: .5rem;
        line-height: 1rem;
        font-style: italic;
        font-weight: 500;
        strong {
            margin-left: -5%;
            margin-right: 3%;
            font-weight: 600;
            font-size: 1rem;
            font-family: 'IBM Plex Mono', monospace;
        }
    }
`;

const Sub = () => {
    return(
        <LeftDiv>
            <LeftInDiv>
                <div className="title">
                    About
                </div>
                    <StickerDiv
                        rotate={-10}
                        hoverColor={"green"}
                    >
                        <div className="stkContentExp">
                            <strong>Assignment</strong> This is a project that visualizes sentiment data for a region by utilizing the website UI.
                        </div>
                    </StickerDiv>
                    <StickerDiv
                        rotate={-10}
                        hoverColor={"green"}
                    >
                        <div className="stkContentExp">
                            <strong>Objective</strong> To create a better online e-commerce shopping experience for customers while.
                        </div>
                    </StickerDiv>
                    <StickerDiv
                        rotate={-26}
                        hoverColor={"blue"}
                    >
                        <div className="stkContentList">
                            <strong>Project Includes</strong>
                        </div>
                    </StickerDiv>
            </LeftInDiv>
        </LeftDiv>
    )
}
export default Sub;