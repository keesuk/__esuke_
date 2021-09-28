import React from "react"

import { MainLayout } from "../components/_Layout.jsx"
import OuterImgBox from "../components/Main/OuterImgBox.jsx"  
import InnerImgBox from "../components/Main/InnerImgBox.jsx"  
import MainTitle from "../components/Main/MainTitle.jsx"
import FolioList from "../components/Main/FolioList.jsx"
import MainText from "../components/Main/MainText.jsx"
import Footnote from "../components/Main/Footnote.jsx"  
import LogoBox from "../components/Main/LogoBox.jsx" 

import { component } from "../_data/Projects/Pigeon.jsx"

const ContentPage = (componets, name, category) => {
    return(
        <MainLayout>
            {component.map((v, i) => {
                let Component

                if(v.type === "OuterImg"){Component = OuterImgBox}
                else if(v.type === "InnerImg"){Component = InnerImgBox}
                else if(v.type === "MainTitle"){Component = MainTitle}
                else if(v.type === "MainText"){Component = MainText}
                else if(v.type === "Footnote"){Component = Footnote}
                else if(v.type === "Logo"){Component = LogoBox}

                return(
                    <Component
                        paddingTopBottom={v.paddingTopBottom}
                        paddingLeftRight={v.paddingLeftRight}
                        paddingRight={v.paddingRight}
                        paddingLeft={v.paddingLeft}
                        paddingTop={v.paddingTop}
                        marginBottom={v.marginBottom}
                        marginRight={v.marginRight}
                        marginLeft={v.marginLeft}
                        marginTop={v.marginTop}
                        isHorizon={v.isHorizon}
                        isOutline={v.isOutline}
                        isFilter={v.isFilter}
                        isLeft={v.isLeft}
                        isThin={v.isThin}
                        contents={v.contents}
                        key={v.image+v.text+i}
                        mainText={v.mainText}
                        remark={v.remark}
                        height={v.height}
                        width={v.width}
                        colorWidth={v.colorWidth}
                        colorSpeed={v.colorSpeed}
                        color={v.color}
                        image={v.image}
                        text={v.text}
                        logo={v.logo}
                        detailTop={v.detailTop}
                        interval={v.interval}
                        category={v.category}
                    />
                )
            })}
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