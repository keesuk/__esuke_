import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link, Route, useLocation } from "react-router-dom";

import { SubLayout } from "../components/_Layout.jsx";
import { portFolioContents, subPageIntroTag } from "../_data/_Data.jsx";
import { TagIntro, TagSticker, TagStickerInner, TagAbout } from "../components/Sub/Tags.jsx";
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
    const tagArr = Object.entries(getKeyByValue(portFolioContents, location)["tag"])
    const portArr = Object.values(portFolioContents)
    const [translateIntro, setTranslateIntro] = useState(false)
    const [translateAboutArr, setTranslateAboutArr] = useState(new Array(tagArr.length).fill(false))
    const [stkArr, setStkArr] = useState(portArr.map(() => new Array(10).fill(false)))
    
    const updateStkArr = (i, j) => {
        let newArr = [...stkArr]
        newArr[i][j] = !newArr[i][j]
        
        setStkArr(newArr)
    }

    const updateAboutTranslate = (i) => {
        let newArr = [...translateAboutArr]
        newArr[i] = !newArr[i]

        setTranslateAboutArr(newArr)
    }

    return(
        <SubLayout>
            <SubPageFrame>
                <div className="title">
                    {location === "" ? "Intro" : "About"}
                </div>
                {location === "" 
                    ?   <TagIntro
                            onMouseEnter={() => setTranslateIntro(true)}
                            onMouseLeave={() => setTranslateIntro(false)}
                            rotate={subPageIntroTag["rotate"]}
                        >
                            <div className="tagContentExp">
                                <div className={translateIntro === true ? "kor" : "eng"}>
                                    {translateIntro === true 
                                        ? subPageIntroTag["text"]["kor"] 
                                        : subPageIntroTag["text"]["eng"]
                                    }
                                </div>
                            </div>
                            <div className="tagSubText">
                                {subPageIntroTag["date"]}
                            </div>
                        </TagIntro>
                    :   tagArr.map(([k, v], i) => 
                            <TagAbout 
                                key={k}
                                rotate={(i+1)*5}
                            >
                                {k === "Project Includes" 
                                    ? <div className="tagContentList">
                                        <strong>{k}</strong>{v}
                                    </div>
                                    : <div className="tagContentExp">
                                        <div className={translateAboutArr[i] === true ? "kor" : "eng"}>
                                            <strong>{k}</strong>{v}
                                        </div>
                                    </div>
                                }
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
            </SubPageFrame>
        </SubLayout>
    )
}
export default Sub;