import React from 'react';
import styled from 'styled-components';
import { Link, Route } from "react-router-dom";

import { line_1, all_portFolio, app_Div } from "../_data/_Functions.jsx";

const LeftDiv = styled.div`
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: -.2em;

    .text {
        width: 100%;
        font-weight: 500;
        font-size: 1.2em;
        letter-spacing: -.02em;
        padding-bottom: 1em;
        border-bottom: .1em dashed black;
    }
    .box {
        margin-top: 1.5em;
        background-color: #fdfdfd;
        
        width: 80%;
        height: 5em;
        border-radius: .5em;
        border: .15em solid red;

        &:after {
            content: "";
            display: flex;
            justify-content: center;
            width: 98%;
            height: 100%;
            border-radius: .5em;
            border: .1em solid red;
        }
    }
`;

const Left = () => {
    return(
        <LeftDiv>
            <div className="text">
                You might wanna see
            </div>
            <div className="box"/><div className="box"/><div className="box"/>
        </LeftDiv>
    )
}
export default Left;