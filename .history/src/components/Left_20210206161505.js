import React from 'react';
import styled from 'styled-components';
import { Link, Route } from "react-router-dom";

import { line_1, all_portFolio, app_Div } from "../_data/_Functions.jsx";

const LeftDiv = styled.div`
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 2.5vw;

    .text {
        width: 100%;
        height: 3.5em;
        font-weight: 500;
        font-size: 1.2em;
        letter-spacing: -.02em;
        border-bottom: .1em dashed black;
        display: flex;
        align-items: center;
    }
`;

const Left = () => {
    return(
        <LeftDiv>
            <div className="text">
                You might wanna see
            </div>
        </LeftDiv>
    )
}
export default Left;