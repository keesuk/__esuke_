import React from 'react';
import styled from 'styled-components';

import { all_portFolio } from '../_data/_Functions.jsx';

const width = 45
const border = 3
const height = width-5
const imgWidth = height - (border * 2)
const right = height * border
const marginLeft = width + 5
const marginTop = -(width)+10
const hoverWidth = (height * border) - (width/border)

const IndexDiv = styled.div`
    @media all and (min-width:0px) and (max-width:1080px) {transform: scale(0.8, 0.8);}
    @media all and (min-width:1081px) {transform: scale(1, 1);}
    transform-origin: top right;
    transition: all .2s ;
    position: absolute;
    z-index: 100;
    width: ${width};
    margin-left: -${width};
    height: 50vh;
    left: 30vw;
    margin-top: 3.5em;
    float: right;

    &:hover {
        @media all and (min-width:0px) and (max-width:1080px) {transform: scale(1.2, 1.2);}
        @media all and (min-width:1081px) {transform: scale(1.4, 1.4);}
    }
`;
const IndexContent = styled.button`
    width: ${width};
    height: ${height};
    float: right;
    padding: 0;
    white-space: nowrap;
    transition: all .2s ease;
    background-color: ${props => props.color};
    
    &:hover {
        width: ${hoverWidth};
    }
    .img {
        opacity: 1;
        margin-left: ${marginLeft};
        border: ${border} solid ${props => props.color};
        width: ${imgWidth};
        height: ${imgWidth};
    }
    .title {
        right: ${right};
        margin-top: -${marginTop};
        position: absolute;
        opacity: 0;
    }
    &:hover .title {
        opacity: 1;
    }
`;

const Index = () => {
    return (
        <IndexDiv>
            {all_portFolio.map(v => 
                <IndexContent 
                    color={v["color"]}
                    key={v["title"]}
                >
                    <img className="img" src={v["img"]} alt={""}/>
                    <div className="title">{v["title"]}</div>
                </IndexContent>
            )}
        </IndexDiv>
    )
}

export default Index;