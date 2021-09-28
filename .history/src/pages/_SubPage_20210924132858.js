import { Link, Route, useLocation } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import Draggable from "react-draggable"
import styled from "styled-components"

import { TagIntro, TagSticker, TagStickerInner, TagWrapper, TagAbout } from "../components/Sub/Tags.jsx"
import { portFolioContents, subPageIntroTag } from "../_data/_Data.jsx"
import { getKeyByValue } from '../_data/_Functions.jsx'
import { SubLayout } from "../components/_Layout.jsx"

const home = ""

const SubPageFrame = styled.div`
    ${({theme}) => theme.mobile` 
        padding-top: 2.5rem; 
    `}
    ${({theme}) => theme.deskTop` 
        padding-top: 3rem; 
    `}
    margin-top: -2.2rem;
    padding-right: 6%;
    padding-left: 6%;
    display: grid;
    
    .title {
        ${({theme}) => theme.mobile` 
            display: none;
        `}
        border-bottom: ${({theme}) => theme.lines["subPageLine"]};
        letter-spacing: -.02rem;
        padding-bottom: .8rem;
        margin-bottom: .6rem;
        font-size: 1.1rem;
        margin-top: 2rem;
        font-weight: 500;
        width: 100%;
    }
`;

const Sub = () => {
    const portArr = Object.values(portFolioContents)
    const [stkArr, setStkArr] = useState(portArr.map(() => new Array(10).fill(false)))
    const location = useLocation().pathname.replace("/", "")
    
    const updateStkArr = (i, j) => {
        let newArr = [...stkArr]
        newArr[i][j] = !newArr[i][j]
        
        setStkArr(newArr)
    }

    return(<>
        <SubLayout>
            <SubPageFrame>
                <div className="title">
                    {location === home 
                        ? "Intro" 
                        : "About"
                    }
                </div>
                {location === home
                    ?   <TagIntro 
                            rotate={subPageIntroTag["rotate"]}
                        >
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
                                    content={v["kor"]}
                                    rotate={i}
                                    key={k}
                                >
                                    {k === "Assignment" ? 
                                        <div className="tagContentExp">
                                            <strong>{k}</strong>{v["eng"]} 
                                        </div> :
                                    (k === "Project Includes" ? 
                                        <div className="tagContentList">
                                            <strong>{k}</strong> {v.map(value => 
                                                <div 
                                                    className="tag"
                                                    key={value} 
                                                >
                                                    {value}
                                                </div>
                                            )}
                                        </div> : 
                                    (k === "Information" ? 
                                        <div className="tagContentInfo">
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