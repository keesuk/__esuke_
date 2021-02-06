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
        margin-top: 2em;
        width: 100%;
        height: 4em;
        background-color: white;
        box-shadow: 2px 4px 6px #666;
    }
`;

const Left = () => {
    return(
        <LeftDiv>
            <div className="text">
                You might wanna see
            </div>
            <div className="box"/>
            <div className="box"/>
            <div className="box"/>
        </LeftDiv>
    )
}
export default Left;