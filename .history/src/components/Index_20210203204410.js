import React from 'react';
import styled from 'styled-components';

import { all_portFolio } from '../_data/_Functions.jsx';

const IndexDiv = styled.div`
    @media all and (min-width:0px) and (max-width:1080px) {transform: scale(0.8, 0.8);}
    @media all and (min-width:1081px) {transform: scale(1, 1);}
    transform-origin: top right;
    transition: all .2s ;
    position: absolute;
    z-index: 100;
    width: 35px;
    height: 50vh;
    left: 30vw;
    margin-top: 3.5em;
    margin-left: -30px;
    float: right;

    &:hover {
        @media all and (min-width:0px) and (max-width:1080px) {transform: scale(1.2, 1.2);}
        @media all and (min-width:1081px) {transform: scale(1.4, 1.4);}
    }
`;

const IndexContent = styled.button`
    width: 2.8em;
    height: 2.4em;
    float: right;
    padding: 0;
    white-space: nowrap;
    transition: all .2s ease;
    background-color: ${props => props.color};
    
    &:hover {
        width: 105px;
    }
    .img {
        opacity: 1;
        margin-left: 50px;
        border: 2.5px solid ${props => props.color};
        width: 30px;
        height: 30px;
    }
    .title {
        right: 120px;
        margin-top: -35px;
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