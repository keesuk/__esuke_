import React from 'react';
import styled from 'styled-components';
import { line_1, rainbow } from '../_data/_Functions.jsx';


const HomeButton = styled.button`
    display: flex;  
    position: fixed;
    z-index: 100;
    border-left: ${line_1};
    border-bottom: ${line_1};
    background-color: white;
    width: 70vw;
    height: 3.5em;
    margin-left: 30vw;
    
    div {
        display: flex;  
        font-size: 1.5em;
        font-weight: 500;
        width: 100%;
        text-align: center;
        align-items: center;
        letter-spacing: -.01em;
    }
    &:after { 
        content: "";
        position: absolute;
        width: 30%;
        height: .12em;
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

const Header = () => {
    return(
        <HomeButton>
            <div>
                Home
            </div>
        </HomeButton>
    )
}
export default Header;