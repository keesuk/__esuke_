import React from "react"

import { MainLayout } from "../components/_Layout.jsx"
import LogoBox from "../components/Main/LogoBox.jsx"
import FolioList from "../components/Main/FolioList.jsx" 
import MainText from "../components/Main/MainText.jsx"
import MainTitle from "../components/Main/MainTitle.jsx" 
import Footnote from "../components/Main/Footnote.jsx" 
import OuterImgBox from "../components/Main/OuterImgBox.jsx"  
import InnerImgBox from "../components/Main/InnerImgBox.jsx"  


const ContentPage = ({content, }) => {
    const { name, footnote, title, category, color, logo, mainText, subText, image, bottomText } = content

    return(
        <MainLayout>

            <FolioList
                category={category}
                exceptionName={name}
                marginBottom={"5"}
                marginRight={"5"}
                marginLeft={"10"}
                marginTop={"4"}
                subTitle={{
                    marginLeft: "10",
                    marginTop: "10",
                    text:"see More",
                }}
            />
        </MainLayout>
    )
}

export default ContentPage