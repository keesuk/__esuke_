import React from 'react';
import styled from 'styled-components';
import { Link, Route } from "react-router-dom";

import { line_1, all_portFolio, app_Div } from "../_data/_Functions.jsx";

const LeftDiv = styled.div`
    margin-left: 2vw;
    margin-right: 2vw;

    .text {
        font-weight: 500;
        font-size: 1.2em;
    }
`;

const Left = () => {
    return(
        <LeftDiv>
            <div className="text">
                You might wanna see
            </div>
        {all_portFolio.map(v => 
            <Route 
                path={"/" + v["title"]} 
                key={v["title"]} 
                component={v["componentL"]}
            >
                <Link to=""></Link>
            </Route> 
         )}
        </LeftDiv>
    )
}
export default Left;