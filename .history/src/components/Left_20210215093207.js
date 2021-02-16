import React from 'react';
import styled from 'styled-components';
import { Link, Route } from "react-router-dom";

import { line_1, all_portFolio, app_Div } from "../_data/_Functions.jsx";

const Left = () => {
    return(
        <LeftInDiv>
            <div className="title">
                About
            </div>
                <StickerDiv
                    rotate={-10}
                    hoverColor={"green"}
                >
                    <div className="stkContentExp">
                        <strong>Assignment</strong> This is a project that visualizes sentiment data for a region by utilizing the website UI.
                    </div>
                </StickerDiv>
                <StickerDiv
                    rotate={-10}
                    hoverColor={"green"}
                >
                    <div className="stkContentExp">
                         <strong>Objective</strong> To create a better online e-commerce shopping experience for customers while.
                     </div>
                </StickerDiv>
                <StickerDiv
                    rotate={-26}
                    hoverColor={"blue"}
                >
                    <div className="stkContentList">
                        <strong>Project Includes</strong>
                    </div>
                </StickerDiv>
        </LeftInDiv>
    )
}
export default Left;