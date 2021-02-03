import { Component } from "react";
import styled from 'styled-components';

import { line_1, line_3, rainbow, app_menu, app_aboutMe, all_portFolio, findObject } from '../_data/_Functions.jsx';

const LeftDiv = styled.div`
    position: fixed;
    border-right: ${line_1};
    z-index: 0;
    width: 30vw;
    height: 100vh;
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
