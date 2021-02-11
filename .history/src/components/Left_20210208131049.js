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
const StickerDiv = styled.div`
    margin-top: 1rem;
    background-color: #fafafa;
    justify-self: start;
    margin-left: 20%;
    width: 72%;
    height: 4.8rem;
    padding: .1rem;
    border-radius: .5rem;
    position: relative;
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

    .dicContent {
        margin-left: 10%;
        margin-top: -28%;
        letter-spacing: -.01rem;
        line-height: 1.5rem;
        font-size: .5rem;

        strong {
            margin-left: -5%;
            font-weight: 600;
            word-spacing: -.1rem;
            font-size: .64rem;
            font-family: 'IBM Plex Mono', monospace;
        }
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
                About
            </div>
                <StickerDiv
                    rotate={15}
                    hoverColor={"green"}
                >
                    <div className="dicContent">
                        <strong>Assignment</strong> To design a new website and shopping experience with a high emphasis on user interactivity and brand content in a functional yet beautiful design.
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


// const DictionaryDiv = styled.div`
//     margin-top: .5rem;
//     margin-left: 20%;
//     margin-bottom: 50vh;
//     text-align: justify;

//     .dicContent {
//         margin-left: 5%;
//         margin-top: .5rem;
//         letter-spacing: -.01rem;
//         line-height: 1.2rem;
//         font-family: 'Cormorant Garamond', serif;
//         font-size: .8rem;
//     }
//     strong {
//         margin-left: -5%;
//         font-weight: 600;
//         word-spacing: -.1rem;
//         font-size: .64rem;
//         font-family: 'IBM Plex Mono', monospace;
//     }
// `;
// <div className="title">
// Remark
// </div>
// <DictionaryDiv>
//     <div className="dicContent">
//         <strong>Assignment</strong> To design a new website and shopping experience with a high emphasis on user interactivity and brand content in a
// functional yet beautiful design.
//     </div>
//     <div className="dicContent">
//         <strong>Objective</strong> To create a better online e-commerce shopping experience for customers while also increasing awareness between social media and the product catalogue.
//     </div>
//     <div className="dicContent">
//         <strong>Project Includes</strong> 
//             <br/>Design Ideation
//             <br/>Design Direction
//             <br/>Final Design
//             <br/>Design Presentation
//     </div>
// </DictionaryDiv>