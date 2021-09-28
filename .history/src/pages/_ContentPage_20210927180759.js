import React from "react"

import { MainLayout } from "../components/_Layout.jsx"
import LogoBox from "../components/Main/LogoBox.jsx"
import FolioList from "../components/Main/FolioList.jsx" 
import MainText from "../components/Main/MainText.jsx"
import MainTitle from "../components/Main/MainTitle.jsx" 
import Footnote from "../components/Main/Footnote.jsx" 
import OuterImgBox from "../components/Main/OuterImgBox.jsx"  
import InnerImgBox from "../components/Main/InnerImgBox.jsx"  


const ContentPage = ({}) => {
    const { name, footnote, title, category, color, logo, mainText, subText, image, bottomText } = PigeonContents

    return(
        <MainLayout>

            <FolioList
                category={category}
                exceptionName={name}
                marginTop={"4"}
                marginLeft={"10"}
                marginRight={"5"}
                marginBottom={"5"}
                subTitle={{
                    text:"see More",
                    marginTop: "10",
                    marginLeft: "10"
                }}
            />
        </MainLayout>
    )
}

export default ContentPage