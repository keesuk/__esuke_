import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../css/_Theme.jsx";

const FolioCell = styled.div`
`;
const HomeButton = styled.button`
    height: 3rem;
    position: fixed;
    box-sizing: border-box;
    z-index: 1;
    margin-left: -4rem;
    width: 5rem;
    top: 0;
    left: ${theme.layoutRatio["sub"]}%;
    
    div {
        position: relative;
        padding: .4rem;
        width: 100%;
        font-size: 2rem;
        font-weight: 500;
        -webkit-filter: drop-shadow(0rem 0rem .04rem rgba(0,0,0,0.5));
        background-color: white;
        background: radial-gradient(
            transparent 0rem, 
            transparent .15rem, 
            white .15rem,
            white
        );
        background-size: .4rem .4rem;
        background-position: -4.2rem -4.2rem;
        box-sizing: border-box;
        color: #4DC2DC;

        &:before {
            content: "";
            position: absolute;
            background-color: #A7EFFF;
            border: 2.5px dotted #4DC2DC;
            z-index: -1;
            top: .2rem;
            bottom: .2rem;
            left: .2rem;
            right: .2rem;
        }
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