import React from 'react';
import styled from 'styled-components';
import Left from './Left'
import Index from '../components/Index'
import { line_1, line_3, rainbow, app_menu, app_aboutMe, all_portFolio, findObject } from '../_data/_Functions.jsx';

const HomeButton = styled.button`
    margin-left: 30vw;
    top: 0;
    display: flex;  
    position: fixed;
    z-index: 100;
    border-left: ${line_1};
    border-bottom: ${line_1};
    background-color: white;
    width: 70vw;
    height: 3.5em;
    font-size: 1.5em;
    font-weight: 500;
    letter-spacing: -.01em;

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
    return (
        <header>
            <Index/>
            <HomeButton>
                    Home
            </HomeButton>
        </header>
    )
}

export default Header;