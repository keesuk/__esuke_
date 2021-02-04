import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { line_1, all_portFolio, app_Div } from "../_data/_Functions.jsx";

const Left = () => {
    return(<>
        {all_portFolio.map(v => 
            <Route 
                path={"/" + v["title"]} 
                key={v["title"]} 
                component={v["componentR"]}
            />)}
    </>)
}
export default Left;