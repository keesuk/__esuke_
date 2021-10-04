import React from "react"

import { TagWrapper } from "../components/Sub/Tags.js"

import Layout from "../components/_Layout.jsx"
import OuterImgBox from "../components/Main/OuterImgBox.js"  
import InnerImgBox from "../components/Main/InnerImgBox.js"  
import MainTitleBox from "../components/Main/MainTitle.js"
import FolioList from "../components/Main/FolioList.js"
import MainTextBox from "../components/Main/MainText.js"
import FootnoteBox from "../components/Main/Footnote.js"  
import LogoBox from "../components/Main/LogoBox.js" 


const ContentPage = ({comp, name, category}) => {
    return(
        <Layout>
            <TagWrapper
                location={name}
            />
            {comp.map((v, i) => {
                let Component

                if(v.type === "OuterImg"){Component = OuterImgBox}
                else if(v.type === "InnerImg"){Component = InnerImgBox}
                else if(v.type === "MainTitle"){Component = MainTitleBox}
                else if(v.type === "MainText"){Component = MainTextBox}
                else if(v.type === "Footnote"){Component = FootnoteBox}
                else if(v.type === "Logo"){Component = LogoBox}

                return(
                    <Component
                        key={name+v.type+i}

                        paddingBottom={v.paddingBottom}
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

                        colorWidth={v.colorWidth}
                        colorSpeed={v.colorSpeed}
                        color={v.color}

                        height={v.height}
                        width={v.width}

                        contents={v.contents}
                        remark={v.remark}

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
        </Layout>
    )
}

export default ContentPage