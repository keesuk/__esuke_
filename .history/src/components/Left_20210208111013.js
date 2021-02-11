import React from 'react';
import styled from 'styled-components';
import { Link, Route } from "react-router-dom";

import { line_1, all_portFolio, app_Div } from "../_data/_Functions.jsx";

const LeftDiv = styled.div`
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
        border-bottom: .1rem dashed black;
    }
`;
const DictionaryDiv = styled.div`
    margin-top: 1rem;
    margin-left: 20%;

    .dicContent {
        font-size: 1rem;
    }
`;

const StickerDiv = styled.div`
    margin-top: 1rem;
    background-color: #fafafa;
    justify-self: start;
    margin-left: 20%;
    width: 72%;
    height: 4.8rem;
    padding: .1rem;
    border-radius: .5rem;
    border: .22rem solid orangered;

    &:before {
        content: "";
        display: block;
        height: 4.6rem;
        border-radius: .2rem;
        border: .1rem solid orangered;
    } 
    &:hover {
        border: .22rem solid ${props => props.hoverColor};
        transform: rotate(${props => props.rotate}deg);
    }
    &:hover:before {
        border: .1rem solid ${props => props.hoverColor};
    }  

    .boxContent {
        position: absolute;
        font-size: 1.1rem;
        letter-spacing: -.025rem;
        margin-top: -4.6rem;
        margin-left: 4.8rem;
    } 
`;

const Left = () => {
    return(
        <LeftDiv>
            <div className="title">
                Remark
            </div>
                <DictionaryDiv>
                    <div className="dicContent">
                        <strong>Assignment</strong> To design a new website and shopping experience with a high emphasis on user interactivity and brand content in a
functional yet beautiful design.
                    </div>
                </DictionaryDiv>
            <div className="title">
                Recommendation
            </div>
                <StickerDiv
                    rotate={15}
                    hoverColor={"green"}
                >
                    <div className="boxContent">
                        Next Item
                    </div>
                </StickerDiv>
                <StickerDiv
                    rotate={-26}
                    hoverColor={"blue"}
                >
                    <div className="boxContent">
                        Next Item
                    </div>
                </StickerDiv>
        </LeftDiv>
    )
}
export default Left;