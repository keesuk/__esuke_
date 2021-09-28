import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

import { portFolioContents } from "../../_data/_Data.jsx";
import theme from "../../css/_Theme.jsx";

const width = 2.2
const imgBorder = 0.25

const height = width
const realWidth = width * 2
const hoverWidth = width * 3
const activeWidth = hoverWidth - (width/2)
const textMargin = hoverWidth + 1
const imgWidth = width - (imgBorder * 2)
const imgHeight = imgWidth

const marginTop = theme.layoutRatio["topMargin"]

const IndexDiv = styled.div`
    ${({theme}) => theme.mobile`
        display: none;
    `}
    margin-top: ${({theme}) => theme.layoutRatio["topMargin"]}rem;
    left: ${({theme}) => theme.layoutRatio["sub"]}%;
    margin-left: -${width}rem;
    width: ${realWidth}rem;
    transform-origin: top right;
    transition: all .2s;
    cursor: pointer;
    position: fixed;
    float: right;
    z-index: 1;
    top: 0;
    
    &:hover .inactive {
        width: ${realWidth}rem; 
        box-shadow: .1rem .1rem .2rem rgba(0, 0, 0, .4);
    }
    .home { 
        width: ${realWidth}rem; 
        box-shadow: 0rem .1rem .06rem rgba(0, 0, 0, .7);
    }
    .active { 
        width: ${hoverWidth}rem; 
        box-shadow: .1rem .1rem .2rem rgba(0, 0, 0, .4);
    }
    .inactive { 
        width: 0; 
        box-shadow: .1rem .1rem .2rem rgba(0, 0, 0, .4);
    }
    &:after {
        margin-top: -${theme.layoutRatio["topMargin"]}rem;
        border-left: ${theme.lines["mainLayoutLine"]}; 
        left: ${width}rem;
        background-color: white;
        position: absolute;
        display: block;
        height: 100%;
        width: 10rem;
        content: "";
        top: 0;
    }
`;
const IndexObjectDiv = styled.div`
    width: ${realWidth}rem;
    height: ${height}rem;
    
    .navlink{
        height: ${height}rem;
        float: right;
        transition-name: blink;
        padding: 0;
        white-space: nowrap;
        transition: all .2s ease;
        background-color: ${({color}) => color};
        .img {
            margin-left: ${width}rem;
            border: ${imgBorder}rem solid ${({color}) => color};
            width: ${imgWidth}rem;
            height: ${imgHeight}rem;
        }
        .title {
            right: ${textMargin}rem;
            transform: translateY(-${height}rem);
            position: absolute;
            font-size: 1.2rem;
            line-height: 1rem;
            padding: .2rem .15rem .2rem .15rem;
            font-weight: 400;
            background-color: black;
            color: white;
            opacity: 0;
            display: none;
        }
        &:hover .title {
            opacity: 1;
            display: block;
        }
    }
    &:hover .navlink { 
        width: ${hoverWidth}rem; 
        box-shadow: 0rem .1rem .1rem rgba(0, 0, 0, .4);
        z-index: 100; 
    }
    &:active .navlink { 
        width: ${activeWidth}rem; 
        box-shadow: 0.1rem 0rem .1rem rgba(0, 0, 0, .8);
        z-index: 100;
    }
`;

const Index = () => {
    const location = useLocation().pathname.replace("/", "")
    
    return (
        <IndexDiv>
            {Object.values(portFolioContents).map(v => 
                <IndexObjectDiv
                    key={v["title"]}
                    color={v["mainColor"]}
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