import React from 'react';
import styled from 'styled-components';
import Left from './Left'
import Index from '../components/Index'
import { line_1, line_3, rainbow, app_menu, app_aboutMe, all_portFolio, findObject } from '../_data/_Functions.jsx';



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