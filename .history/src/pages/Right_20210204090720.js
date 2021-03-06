import { Component } from "react";
import { Route } from "react-router-dom";

import styled from "styled-components";
import _Home from "./_Home.jsx";

import { line_1 } from "../_data/_Functions.jsx";


const RightDiv = styled.div`
    margin-left: 30vw;

    .rightRight {
        border-left: ${line_1};
        position: fixed;
        z-index: 50;
        width: 70vw;
        overflow: auto;
        margin-top: 3.5em;
        height: 100%;
    }
`;


class Right extends Component {
    render(){
        return(
            <RightDiv>
                <div className="rightRight">
                    <_Home/>
                </div>
            </RightDiv>
        )
    }
}

export default Right;
