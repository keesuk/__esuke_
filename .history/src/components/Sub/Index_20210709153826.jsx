import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

import { portFolioContents } from "../_data/_Data.jsx";
import theme from "../../css/_Theme.jsx";

const width = 110
const hoverWidth = 240
const border = 5
const right = hoverWidth + 15
const height = width-10
const imgWidth = height - (border * 2)
const marginLeft = width 

const IndexDiv = styled.div`
    @media (max-width: 3900px) {transform: scale(0.72, 0.72)};
    @media (max-width: 3650px) {transform: scale(0.69, 0.69)};
    @media (max-width: 3400px) {transform: scale(0.66, 0.66)};
    @media (max-width: 3150px) {transform: scale(0.63, 0.63)};
    @media (max-width: 2900px) {transform: scale(0.6, 0.6)};
    @media (max-width: 2650px) {transform: scale(0.57, 0.57)};
    @media (max-width: 2400px) {transform: scale(0.54, 0.54)};
    @media (max-width: 2150px) {transform: scale(0.51, 0.51)};
    @media (max-width: 1900px) {transform: scale(0.48, 0.48)};
    @media (max-width: 1750px) {transform: scale(0.45, 0.45)};
    @media (max-width: 1400px) {transform: scale(0.42, 0.42)};
    @media (max-width: 1150px) {transform: scale(0.39, 0.39)};
    @media (max-width: 900px) {transform: scale(0.36, 0.36)};
    @media (max-width: 750px) {transform: scale(0.33, 0.33)};
    @media (max-width: 400px) {transform: scale(0.3, 0.3)};
    
    transform-origin: top right;
    transition: all .2s;
    position: fixed;
    z-index: 1;
    top: 0;
    margin-top: 3rem;
    margin-left: -${width}px;
    width: ${width}px;
    left: ${theme.layoutRatio["sub"]}%;
    float: right;
    
    &:hover {
    @media (max-width: 3900px) {transform: scale(0.92, 0.92)};
    @media (max-width: 3650px) {transform: scale(0.89, 0.89)};
    @media (max-width: 3400px) {transform: scale(0.86, 0.86)};
    @media (max-width: 3150px) {transform: scale(0.83, 0.83)};
    @media (max-width: 2900px) {transform: scale(0.8, 0.8)};
    @media (max-width: 2650px) {transform: scale(0.77, 0.77)};
    @media (max-width: 2400px) {transform: scale(0.74, 0.74)};
    @media (max-width: 2150px) {transform: scale(0.71, 0.71)};
    @media (max-width: 1900px) {transform: scale(0.68, 0.68)};
    @media (max-width: 1750px) {transform: scale(0.65, 0.65)};
    @media (max-width: 1400px) {transform: scale(0.62, 0.62)};
    @media (max-width: 1150px) {transform: scale(0.59, 0.59)};
    @media (max-width: 900px) {transform: scale(0.56, 0.56)};
    @media (max-width: 750px) {transform: scale(0.53, 0.53)};
    @media (max-width: 400px) {transform: scale(0.5, 0.5)};
        
        .inactive { width: ${width}px; }
    }
    .home { width: ${width}px; box-shadow: 0px 1px 1.5px rgba(0, 0, 0, .4);}
    .active { width: ${hoverWidth}px; box-shadow: 0px 1px 1.5px rgba(0, 0, 0, .4);}
    .inactive { width: ${0}px; }
    &:after {
        content: "";
        background-color: #ffffff;
        top: 0;
        margin-left: calc(1.8rem + ${width}px);
        width: ${hoverWidth}px;
        position: absolute;
        height: 100%;
    }
`;
const IndexObjectDiv = styled.div`
    width: ${width}px;
    height: ${height}px;
    .navlink{
        height: ${height}px;
        float: right;
        transition-name: blink;
        padding: 0;
        white-space: nowrap;
        transition: all .2s ease;
        background-color: ${props => props.color};
        .img {
            margin-left: ${marginLeft}px;
            border: ${border}px solid ${props => props.color};
            width: ${imgWidth}px;
            height: ${imgWidth}px;
        }
        .title {
            right: ${right}px;
            transform: translateY(-200%);
            position: absolute;
            font-size: 40px;
            line-height: 40px;
            padding: 1px 3px 1px 3px;
            font-weight: 400;
            background-color: black;
            
            color: white;
            opacity: 0;
            display: none;
        }
        &:hover .title {
            opacity: 1;
            display: block;
    }}
    &:hover .navlink { width: ${hoverWidth}px; box-shadow: 2px 2px 8px rgba(0, 0, 0, .4); }
    &:active .navlink { width: ${hoverWidth + 12}px; box-shadow: 2px 2px 4px rgba(0, 0, 0, .7);}
`;

const Index = () => {
    const location = useLocation().pathname.replace("/", "")
    
    return (
        <IndexDiv>
            {portFolioContents.map(v => 
                <IndexObjectDiv
                    key={v["title"]}
                    color={v["color"]}
                >
                    <NavLink 
                        to={v["title"]}
                        className={
                            `navlink
                            ${location === ""
                            ? "home"
                            : (location === v["title"]
                            ? "active"
                            : "inactive")}`}
                    >
                        <img className="img" src={v["img"]} alt={""}/>
                        <div className="title">{v["title"]}</div>
                    </NavLink>
                </IndexObjectDiv>
            )}
        </IndexDiv>
    )
}

export default Index;