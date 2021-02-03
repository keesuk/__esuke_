import { Component } from "react";
import { Route } from 'react-router-dom';

import styled from 'styled-components';

import { line_1, line_3, rainbow, app_menu, app_aboutMe, all_portFolio, findObject } from '../_data/_Functions.jsx';


const ContentsDiv = styled.div`
    margin-left: 30vw;

    .rightContents {
        border-left: ${line_1};
        position: fixed;
        z-index: 50;
        width: 70vw;
        overflow: auto;
        margin-top: 3.5em;
        height: 100%;
    }
`;


class Contents extends Component {
    render(){
        return(
            <ContentsDiv>
                <div className="rightContents">
                </div>
            </ContentsDiv>
        )
    }
}

export default Contents;
