import { Component } from "react";
import styled from 'styled-components';
import AboutMe from "../components/_AboutMe.jsx";
import Contact from "../components/_Contact.jsx";

import { line_1, line_3, rainbow, app_menu, app_aboutMe, all_portFolio, findObject } from '../_data/_Functions.jsx';

const LeftDiv = styled.div`
    position: fixed;
    border-right: ${line_1};
    z-index: 100;
    width: 30vw;
    height: 100vh;
    top: 0;
    background-color: #EEE; 
    overflow: hidden;
`;
class Left extends Component {
    render(){
        return(
            <LeftDiv/>
        )
    }
}

export default Left;
