import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../css/_Theme.jsx";

const FolioCell = styled.div`
`;
const HomeButton = styled.button`
    position: fixed;
    box-sizing: border-box;
    z-index: 1;
    margin-left: -5rem;
    width: 3.5rem;
    top: 0;
    left: ${theme.layoutRatio["sub"]}%;
    
    div {
        position: relative;
        padding: .4rem;
        width: 100%;
        font-size: 2rem;
        line-height: 1.4rem;
        font-weight: 500;
        -webkit-filter: drop-shadow(0rem 0rem .05rem rgba(0,0,0,0.3));
        background-color: white;
        background: radial-gradient(
            transparent 0rem, 
            transparent .15rem, 
            white .15rem,
            white
        );
        background-size: .4rem .4rem;
        background-position: -4.2rem -4.2rem;
        color: #4DC2DC;
        box-sizing: border-box;

        &:before {
            content: "";
            position: absolute;
            background-color: #A7EFFF;
            border: 2px dotted #4DC2DC;
            z-index: -1;
            top: .22rem;
            bottom: .22rem;
            left: .22rem;
            right: .22rem;
        }
    }
    &:after { 
        content: "";
        position: absolute;
        z-index: 1000;
        height: .15rem;
        left:30%;
        right: 30%;
        bottom: 50%;
        visibility: hidden;
        background: ${theme.colorObjs["homeButtonHover"]};
    }
    &:hover:after { 
        visibility: visible;
    }
`;

const Home = () => {
    return(
        <Link to="/">
            <HomeButton>
                <div>▴ </div>
            </HomeButton>
        </Link>
    )
}
export default Home;