import React from 'react';
import styled from 'styled-components';
import { Link, Route } from "react-router-dom";

import { line_1, all_portFolio, app_Div } from "../_data/_Functions.jsx";

const Left = () => {
    return(null
        /*<>
        
         {all_portFolio.map(v => 
            <Route 
                path={"/" + v["title"]} 
                key={v["title"]} 
                component={v["componentL"]}
            >
                <Link to=""></Link>
            </Route> 
        )
    </>*/)
}
export default Left;