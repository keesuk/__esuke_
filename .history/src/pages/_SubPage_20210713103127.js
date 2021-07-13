import React from 'react';
import styled from "styled-components";
import { Link, Route, useLocation } from "react-router-dom";

import { SubLayout } from "../components/_Layout.jsx";
import { subPageTag } from "../_data/_Data.jsx";
import { TagIntro, TagDiv } from "../components/Sub/Tag.jsx";
import theme from "../css/_Theme.jsx";


const SubPageFrame = styled.div`
    margin-left: 6%;
    margin-right: 6%;
    margin-top: -2.2rem;
    display: grid;
    .title {
        width: 100%;
        font-weight: 500;
        font-size: 1.1rem;
        letter-spacing: -.02rem;
        margin-top: 2rem;
        padding-bottom: .8rem;
        margin-bottom: .6rem;
        border-bottom: ${theme.lines["subPageLine"]};
    }
`;

const Sub = () => {
    const location = useLocation().pathname.replace("/", "")

    return(
        <SubLayout>
            <SubPageFrame>
                <div className="title">
                    {location === "" ? "Intro" : "About"}
                </div>
                {location === "" 
                    ? <TagIntro>
                        <div className="tagContentExp">
                            {subPageTag["Intro"]["text"]}
                        </div>
                    </TagIntro>
                    : <TagDiv
                        rotate={-10}
                        hoverColor={"green"}
                    >
                        <div className="tagContentExp">
                            <strong>Assignment</strong> This is a project that visualizes sentiment data for a region by utilizing the website UI.
                        </div>
                    </TagDiv>
                }
            </SubPageFrame>
        </SubLayout>
    )
}
export default Sub;