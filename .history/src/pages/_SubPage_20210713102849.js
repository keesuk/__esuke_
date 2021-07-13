import React from 'react';
import styled from "styled-components";
import { Link, Route, useLocation } from "react-router-dom";

import { SubLayout } from "../components/_Layout.jsx";
import { subPageTag } from "../_data/_Data.jsx"
import theme from "../css/_Theme.jsx"


const SubPageFrame = styled.div`
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
        border-bottom: ${theme.lines["subPageLine"]};
    }
`;
const TagIntro = styled.div`
    margin-top: 1rem;
    background-color: ${theme.colorObjs["subTagBackColor"]};
    justify-self: start;
    margin-left: 20%;
    width: 72%;
    height: 260%;
    padding: .1rem;
    border-radius: .5rem;
    position: relative;
    border: ${theme.lines["subTagLineBold"]};
    &:before {
        content: "";
        display: block;
        height: 100%;
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
    .tagContentExp {
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
`;
const TagDiv = styled.div`
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
    .tagContentExp {
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
    .tagContentList {
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
    const location = useLocation().pathname.replace("/", "")

    return(
        <SubLayout>
            <SubPageFrame>
                <div className="title">
                    {location === "" ? "Intro" : "About"}
                </div>
                {location === "" 
                    ? <TagIntro>
                        <div className="tagContentExp">
                            {subPageTag["Intro"]["text"]}
                        </div>
                    </TagIntro>
                    : <TagDiv
                        rotate={-10}
                        hoverColor={"green"}
                    >
                        <div className="tagContentExp">
                            <strong>Assignment</strong> This is a project that visualizes sentiment data for a region by utilizing the website UI.
                        </div>
                    </TagDiv>
                }
            </SubPageFrame>
        </SubLayout>
    )
}
export default Sub;