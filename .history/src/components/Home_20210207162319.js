import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { line_1, rainbow, all_div } from '../_data/_Functions.jsx';


const HomeButton = styled.button`
    border-bottom: ${line_1};
    border-left: ${line_1};
    background-color: white;
    height: 3rem;
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    width: ${all_div["RWidth"]}%;
    margin-left: ${all_div["LWidth"]}%;
    
    div {
        display: flex;  
        font-size: 1.5rem;
        font-weight: 500;
        width: 100%;
        justify-content: center;
        align-items: center;
        letter-spacing: -.01rem;

        mark {
            display: inline-block; 
            height: 1.2rem;
            line-height: 1rem;
            padding-top: -1;
            padding-left: 1px;
            padding-right: 1px;
            background-color: black;
            color: white;
        }
    }
    &:after { 
        content: "";
        position: absolute;
        z-index: 1000;
        height: .1rem;
        left:30%;
        right: 30%;
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