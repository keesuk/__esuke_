import React from 'react';
import styled from 'styled-components';
import { Link, Route } from "react-router-dom";

import { line_1, all_portFolio, app_Div } from "../_data/_Functions.jsx";

const LeftDiv = styled.div`
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: -2.2em;
    display: grid;

    .text {
        width: 100%;
        font-weight: 500;
        font-size: 1.2rem;
        letter-spacing: -.02em;
        margin-top: 2em;
        padding-bottom: 1em;
        border-bottom: .1em dashed black;
    }
`;

const StickerDiv = styled.div`
    margin-top: 1.5em;
    background-color: #fafafa;
    
    justify-self: start;
    margin-left: 10%;
    width: 70%;
    height: 5em;
    padding: .2em;
    border-radius: .5em;
    border: .25em solid orangered;

    &:before {
        content: "";
        display: block;
        height: 4.8em;
        border-radius: .2em;
        border: .1em solid orangered;
    } 
    &:hover {
        border: .25em solid ${props => props.hoverColor};
        transform: rotate(${props => props.rotate}deg);
    }
    &:hover:before {
        border: .1em solid ${props => props.hoverColor};
    }  

    .box_text {
        position: absolute;
        margin-top: -4.8em;
        margin-left: 4.8em;
    } 
`;

const Left = () => {
    return(
        <LeftDiv>
            <div className="text">
                You might wanna see
            </div>
            <StickerDiv
                rotate={15}
                hoverColor={"green"}
            >
                <div className="box_text">
                    Next Item
                </div>
            </StickerDiv>
            <StickerDiv
                rotate={-26}
                hoverColor={"blue"}
            >
                <div className="box_text">
                    Next Item
                </div>
            </StickerDiv>
            <div className="text">
                Remark
            </div>
        </LeftDiv>
    )
}
export default Left;