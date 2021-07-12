import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

import { portFolioContents } from "../../_data/_Data.jsx";
import theme from "../../css/_Theme.jsx";

const width = 110
const hoverWidth = 240
const border = 5
const right = hoverWidth + 15
const height = width-10
const imgWidth = height - (border * 2)
const marginLeft = width 

const IndexDiv = styled.div`
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