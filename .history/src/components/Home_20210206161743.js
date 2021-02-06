import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { line_1, rainbow } from '../_data/_Functions.jsx';


const HomeButton = styled.button`
    position: fixed;
    z-index: 100;
    border-left: ${line_1};
    border-bottom: ${line_1};
    background-color: white;
    width: 70vw;
    height: 2vh;
    margin-left: 30vw;
    
    div {
        display: flex;  
        font-size: 1.5em;
        font-weight: 500;
        width: 100%;
        justify-content: center;
        align-items: center;
        letter-spacing: -.01em;
    }
    &:after { 
        content: "";
        position: absolute;
        width: 30%;
        height: .15em;
        left: 35%;
        right: 35%;
        top: 50%;
        bottom: 50%;
        visibility: hidden;
        background: ${rainbow};
    }
    &:hover:after { 
        visibility: visible;
    }
`;

const Home = () => {
    return(
        <Link to="/">
            <HomeButton>
                <div>Home</div>
            </HomeButton>
        </Link>
    )
}
export default Home;