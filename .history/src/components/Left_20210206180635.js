import React from 'react';
import styled from 'styled-components';
import { Link, Route } from "react-router-dom";

import { line_1, all_portFolio, app_Div } from "../_data/_Functions.jsx";

const LeftDiv = styled.div`
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: -.2em;
    display: grid;

    .text {
        position: relative;
        width: 100%;
        font-weight: 500;
        font-size: 1.2em;
        letter-spacing: -.02em;
        padding-bottom: 1em;
        border-bottom: .1em dashed black;
    }
`;

const StickerDiv = styled.div`
    position: relative;
    margin-top: 1.5em;
    background-color: #fbfbfb;
    float: right;
    width: 75%;
    height: 5em;
    padding: .2em;
    border-radius: .5em;
    border: .2em solid red;
    transform: rotate(${props => props.rotate}deg);

    &:before {
        content: "";
        display: block;
        height: 4.8em;
        border-radius: .2em;
        border: .1em solid red;
    } 
    &:hover {
        border: .2em solid ${props => props.hoverColor};
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
                rotate={0}
                hoverColor={"green"}
            >
                <div className="box_text">
                    Next Item
                </div>
            </StickerDiv>
            <StickerDiv
                rotate={0}
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