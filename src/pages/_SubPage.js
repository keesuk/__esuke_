import { useLocation } from "react-router-dom"
import React from 'react'
import styled from "styled-components"

import { TagIntro, TagSticker, TagWrapper } from "../components/Sub/Tags.js"
import { portFolioContents, subPageIntroTag } from "../_data/_Data.jsx"
import { SubLayout } from "../components/_Layout.jsx"

const home = ""

const SubPageFrame = styled.div`
    ${({theme}) => theme.mobile` 
        padding-top: 2.5rem; 
    `}
    ${({theme}) => theme.deskTop` 
    `}
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
`

const Sub = () => {
    const location = useLocation().pathname.replace("/", "")

    return(
        <SubLayout>
            <SubPageFrame>
                {location === home
                    ?   <TagIntro 
                            kor={subPageIntroTag["text"]["kor"]}
                            eng={subPageIntroTag["text"]["eng"]}
                            rotate={subPageIntroTag["rotate"]}
                            date={subPageIntroTag["date"]}
                        />
                    :   <TagWrapper
                            portFolioArr={portFolioContents}
                            location={location}
                        />
                }
            </SubPageFrame>
        </SubLayout>
    )
}
export default Sub