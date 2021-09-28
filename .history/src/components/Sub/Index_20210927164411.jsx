import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

import { portFolioContents } from "../../_data/_Data.jsx";
import theme from "../../css/_Theme.jsx";

const imgBorder = 0.25
const width = 2.2
const height = width

const hoverWidth = width * 3
const activeWidth = hoverWidth - (width/2)
const imgWidth = width - (imgBorder * 2)
const textMargin = hoverWidth + 1
const realWidth = width * 2
const imgHeight = imgWidth

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
        background-color: ${({color}) => color};
        height: ${height}rem;
        transition: all .2s ease;
        transition-name: blink;
        white-space: nowrap;
        float: right;
        padding: 0;
        .img {
            border: ${imgBorder}rem solid ${({color}) => color};
            margin-left: ${width}rem;
            height: ${imgHeight}rem;
            width: ${imgWidth}rem;
        }
        .title {
            transform: translateY(-${height}rem);
            right: ${textMargin}rem;
            padding: .2rem .15rem .2rem .15rem;
            background-color: black;
            position: absolute;
            font-size: 1.2rem;
            line-height: 1rem;
            font-weight: 400;
            display: none;
            color: white;
            opacity: 0;
        }
        &:hover .title {
            display: block;
            opacity: 1;
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
                    color={v["mainColor"]}
                    key={v["title"]}
                >
                    <NavLink 
                        className={`navlink
                            ${location === ""
                                ? "home"
                                : (location === v["title"]
                                    ? "active"
                                    : "inactive"
                            )}
                        `}
                        to={v["title"]}
                    >
                        <img 
                            className="img" 
                            src={v["img"]} 
                            alt={""}
                        />
                        <div className="title">
                            {v["title"]}
                        </div>
                    </NavLink>
                </IndexObjectDiv>
            )}
        </IndexDiv>
    )
}

export default Index;