import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link, Route, useLocation } from "react-router-dom";
import Draggable from "react-draggable"

import { SubLayout } from "../components/_Layout.jsx";
import { portFolioContents, subPageIntroTag } from "../_data/_Data.jsx";
import { TagIntro, TagSticker, TagStickerInner, TagWrapper, TagAbout } from "../components/Sub/Tags.jsx";
import { getKeyByValue } from '../_data/_Functions.jsx';

import theme from "../css/_Theme.jsx";

const home = ""

const SubPageFrame = styled.div`
    ${({theme}) => theme.mobile` padding-top: 2.5rem; `}
    ${({theme}) => theme.deskTop` padding-top: 3rem; `}
    padding-left: 6%;
    padding-right: 6%;
    margin-top: -2.2rem;
    display: grid;
    
    .title {
        ${({theme}) => theme.mobile` display: none;`}
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
    const portArr = Object.values(portFolioContents)
    const [stkArr, setStkArr] = useState(portArr.map(() => new Array(10).fill(false)))
    
    const updateStkArr = (i, j) => {
        let newArr = [...stkArr]
        newArr[i][j] = !newArr[i][j]
        
        setStkArr(newArr)
    }

    return(<>
        <SubLayout>
            <SubPageFrame>
                <div className="title">
                    {location === home ? "Intro" : "About"}
                </div>
                {location === home
                    ?   <TagIntro rotate={subPageIntroTag["rotate"]}>
                            <div className="tagContentExp">
                                <div className="eng">
                                    {subPageIntroTag["text"]["eng"]}
                                </div>
                                <div className="kor">
                                    {subPageIntroTag["text"]["kor"]}
                                </div>
                            </div>
                            <div className="tagSubText">
                                {subPageIntroTag["date"]}
                            </div>
                        </TagIntro>
                    :   <TagWrapper>
                            {Object.entries(getKeyByValue(portFolioContents, location)["tag"]).map(([k, v], i) => 
                                <TagAbout 
                                    key={k}
                                    content={v["kor"]}
                                    rotate={i}
                                >
                                    {k === "Assignment" ? 
                                        <div className="tagContentExp">
                                            <strong>{k}</strong>{v["eng"]} 
                                        </div> :
                                    (k === "Project Includes" ? 
                                        <div className="tagContentList">
                                            <strong>{k}</strong>
                                                {v.map(value => 
                                                    <div className="tag">
                                                        {value}
                                                    </div>
                                                )}
                                        </div> : 
                                    (k === "Information" ? 
                                        <div className="tagContentInclude">
                                            <strong>{k}</strong>{v}
                                        </div> : 
                                    null))}
                                </TagAbout>
                            )}
                        </TagWrapper>
                }
            </SubPageFrame>
        </SubLayout>
        <Draggable 
            bounds="parent"
            handle=".checkOutTag"
            grid={[20, 20]}
        >
            <TagSticker
                isHome={location === home ? true : false} 
            >
                <div className="checkOutTag">
                    <div className="up">
                        Drag Here
                    </div>
                    <div className="down">
                        Score
                    </div>
                </div>
                <div className="stkBack">
                    {portArr.map((v, i) => 
                        <TagStickerInner 
                            key={i} 
                            mainColor={v["mainColor"]}
                        >
                            {stkArr[i].map((v, j) => 
                                <div 
                                    key={j} 
                                    className={stkArr[i][j] === false ? "stkCircle" : "stkCircleOff"}
                                    onMouseOver={() => updateStkArr(i,j)}
                                    onMouseLeave={() => updateStkArr(i,j)}
                                />
                            )}
                        </TagStickerInner>
                    )}
                </div>
            </TagSticker>
        </Draggable>
    </>)
}
export default Sub;