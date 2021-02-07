import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from "react-router-dom";

import { all_portFolio, all_div } from '../_data/_Functions.jsx';

const width = 60
const hoverWidth = 140
const border = 4.5
const right = hoverWidth + 15
const height = width-5
const imgWidth = height - (border * 2)
const marginLeft = width 

const IndexDiv = styled.div`
    @media all and (min-width:0px) and (max-width:1080px) {transform: scale(0.65, 0.65);}
    @media all and (min-width:1081px) {transform: scale(0.7, 0.7);}
    
    transform-origin: top right;
    transition: all .2s;
    position: absolute;
    z-index: 1;
    top: 0;
    margin-top: 4rem;
    width: ${width}px;
    margin-left: -${width}px;
    left: ${all_div["LWidth"]}%;
    float: right;
    
    &:hover {
        @media all and (min-width:0px) and (max-width:1080px) { transform: scale(0.9, 0.9);}
        @media all and (min-width:1081px) { transform: scale(1.0, 1.0); }
        
        .inactive { width: ${width}px; }
    }
    .home { width: ${width}px; box-shadow: 0px 1px 1.5px rgba(0, 0, 0, .4);}
    .active { width: ${hoverWidth}px; box-shadow: 0px 1px 1.5px rgba(0, 0, 0, .4);}
    .inactive { width: ${0}px; }

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
            transform: translateY(-150%);
            position: absolute;
            font-size: 18px;
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
            {all_portFolio.map(v => 
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