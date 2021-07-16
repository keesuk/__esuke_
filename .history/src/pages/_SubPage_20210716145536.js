import React from 'react';
import styled from "styled-components";
import { Link, Route, useLocation } from "react-router-dom";

import { SubLayout } from "../components/_Layout.jsx";
import { subPageIntroTag } from "../_data/_Data.jsx";
import { TagIntro, TagSticker, TagStickerInner, TagAbout } from "../components/Sub/Tags.jsx";
import { portFolioContents } from '../_data/_Data.jsx';
import { getKeyByValue } from '../_data/_Functions.jsx';

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
    const stkArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const portArr = Object.values(portFolioContents)

    return(
        <SubLayout>
            <SubPageFrame>
                <div className="title">
                    {location === "" ? "Intro" : "About"}
                </div>
                {location === "" 
                    ? 
                    <TagIntro
                        hoverColor={subPageIntroTag["hoverColor"]}
                        rotate={subPageIntroTag["rotate"]}
                    >
                        <div className="tagContentExp">
                            {subPageIntroTag["text"]}
                        </div>
                        <div className="tagSubText">
                            {subPageIntroTag["date"]}
                        </div>
                    </TagIntro>
                    : 
                    Object.entries(getKeyByValue(portFolioContents, location)["tag"]).map(([k, v]) => 
                        <TagAbout key={k}>
                            <div className={k === "Project Includes" ? "tagContentList" :"tagContentExp"}>
                                <strong>{k}</strong>{v}
                            </div>
                        </TagAbout>
                    )
                }
                <TagSticker
                    isHome={location === "" ? true : false} 
                >
                    <div className="checkOutTag">
                        <div className="up">
                            Check Out
                        </div>
                        <div className="down">
                            AboutMe
                        </div>
                    </div>
                    <div className="stkBack">
                        {portArr.map((v, i) => 
                            <TagStickerInner 
                                key={i} 
                                mainColor={v["mainColor"]}
                            >
                                {stkArr.map((v, i) => 
                                    <div key={i} className="stkCircle" />
                                )}
                            </TagStickerInner>
                        )}
                    </div>
                </TagSticker>
            </SubPageFrame>
        </SubLayout>
    )
}
export default Sub;