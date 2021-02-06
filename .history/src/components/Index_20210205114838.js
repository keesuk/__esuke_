import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

import { all_portFolio } from '../_data/_Functions.jsx';

const width = 60
const hoverWidth = 140
const border = 4.5
const right = hoverWidth + 15
const height = width-5
const imgWidth = height - (border * 2)
const marginLeft = width 

const IndexDiv = styled.div`
    @media all and (min-width:0px) and (max-width:1080px) {transform: scale(0.6, 0.6);}
    @media all and (min-width:1081px) {transform: scale(0.7, 0.7);}
    transform-origin: top right;
    transition: all .2s ;
    position: absolute;
    z-index: 50;
    width: ${width}px;
    margin-left: -${width}px;
    height: 50vh;
    left: 30vw;
    margin-top: 3.5em;
    float: right;

    &:hover {
        @media all and (min-width:0px) and (max-width:1080px) {transform: scale(0.9, 0.9);}
        @media all and (min-width:1081px) {transform: scale(1.0, 1.0);}
    }

    .active {
        width: ${hoverWidth}px;

        .img {
            opacity: 1;
            display: block;
        }
        .title {
            opacity: 1;
            display: block;
        }
    }
`;
const IndexContent = styled(NavLink)`
    width: ${width}px;
    height: ${height}px;
    float: right;
    padding: 0;
    white-space: nowrap;
    transition: all .2s ease;
    background-color: ${props => props.color};
    
    &:hover {
        width: ${hoverWidth}px;
    }
    &:active {
        width: ${hoverWidth + 12}px;
    }
    .img {
        opacity: 1;
        display: none;
        margin-left: ${marginLeft}px;
        border: ${border}px solid ${props => props.color};
        width: ${imgWidth}px;
        height: ${imgWidth}px;
    }
    &:hover .img {
        opacity: 1;
        display: block;
    }
    .title {
        right: ${right}px;
        height: ${height}px;
        transform: translateY(-100%);
        position: absolute;
        font-size: 18px;
        font-weight: 400;
        opacity: 0;
        display: none;
    }
    &:hover .title {
        opacity: 1;
        display: block;
    }
`;

const Index = () => {
    return (
        <IndexDiv>
            {all_portFolio.map(v => 
                <IndexContent 
                    to={v["title"]}
                    key={v["title"]}
                    color={v["color"]}
                    activeClassName="active"
                >
                    <img className="img" src={v["img"]} alt={""}/>
                    <div className="title">{v["title"]}</div>
                </IndexContent>
            )}
        </IndexDiv>
    )
}

export default Index;