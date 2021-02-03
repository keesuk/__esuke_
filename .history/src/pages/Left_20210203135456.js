import { Component } from "react";
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import AboutMe from "../components/_AboutMe.jsx";
import Contact from "../components/_Contact.jsx";

import { line_1, line_3, rainbow, app_menu, app_aboutMe, all_portFolio, findObject } from '../_data/_Functions.jsx';

const LeftDiv = styled.div`
    position: fixed;
    z-index: 100;
    width: 30vw;
    height: 100vh;
    top: 0;
    background-color: #EEE; 
    overflow: hidden;

    .index {
        @media all and (min-width:0px) and (max-width:1080px) {transform: scale(0.8, 0.8);}
        @media all and (min-width:1081px) {transform: scale(1, 1);}
        transform-origin: top right;
        transition: all .2s ;
        position: absolute;
        z-index: 100;
        width: 35px;
        height: 50vh;
        margin-top: 3.5em;
        right: 0;
        float: right;
    }
    &:hover .index {
        @media all and (min-width:0px) and (max-width:1080px) {transform: scale(1.2, 1.2);}
        @media all and (min-width:1081px) {transform: scale(1.4, 1.4);}
    }
    .menu {
        position: fixed;
        display: grid;
        grid-gap: 15px;
        margin-left: -30px;
        bottom: 60px;
    }
`;
const IndexContent = styled.button`
    width: 40px;
    height: 35px;
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
const MenuDiv = styled.div`
    button {
        padding-left: 30px;
        width: 210px;
        height: 54px;
        border: ${line_3};
        box-shadow: 5px 5px black;

        .open {
            font-weight: 400;
            font-size: 21px;
            width: 210px;
            letter-spacing: -1px;
            text-align: center;
            align-items: auto;
        }
        .close {
            position: absolute;
            color: white;
            z-index: 100;
            margin-left: ${props => props.leftText};
            margin-top: ${props => props.marginText};
            font-size: 12px;
            font-weight: 600;
            white-space: nowrap;
            transform: rotate(-90deg);
        }
    }
    .postIt {
        &:hover {
            text-decoration-line: line-through;
            text-decoration-thickness: 3.5px;
            box-shadow: 6px 6px 6px #999;
        }
        &:active {
            text-decoration-line: line-through;
            text-decoration-thickness: 2px;
            box-shadow: 2px 2px 2px #666;
        }
    }
    .postItAfter {
        width: ${props => props.width};
        box-shadow: none;
        border-right: 0px;

        &:hover {
            box-shadow: -4px 3.5px 3.5px rgba(0, 0, 0, .5);
        }
        &:after {
            content: "";
            position: absolute;
            width: 58px;
            height: ${props => props.height};
            left: ${props => props.left};
            margin-top: ${props => props.margin};
            background-color: black;
        }
        &:hover:after {
            box-shadow: 0em -.1em .8em rgba(0, 0, 0, .3);
        }
        &:before {
            content: "";
            position: absolute;
            left: ${props => props.left};
            margin-top: -29px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 58px 58px 0 0;
            border-color: black transparent transparent transparent;
        }
    }
`;



class Left extends Component {
    render(){
        return(<>
        </>)
    }
}

export default Left;
