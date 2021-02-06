import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { line_1, rainbow, all_div } from '../_data/_Functions.jsx';


const HomeButton = styled.button`
    position: fixed;
    z-index: 100;
    border-left: ${line_1};
    border-bottom: ${line_1};
    background-color: white;
    width: ${all_div["RWidth"]}vw;
    height: 6.5vh;
    margin-left: ${all_div["LWidth"]}vw;
    
    div {
        display: flex;  
        font-size: 1.5em;
        font-weight: 500;
        width: 100%;
        justify-content: center;
        align-items: center;
        letter-spacing: -.01em;

        mark {
            display: inline-block; 
            height: 1em;
            line-height: 1em;
            padding-top: -1;
            background-color: black;
            color: white;
            text-shadow: 1px 1px 2px white;
        }
    }
    &:after { 
        content: "";
        position: absolute;
        width: 30%;
        height: .2em;
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
                <div><mark>Home</mark></div>
            </HomeButton>
        </Link>
    )
}
export default Home;