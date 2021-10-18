import React from "react"
import { welcomeMention, otherSiteLink, subPageIntroTag } from "../_data/_Data.jsx"
import Layout from "../css/_Layout.jsx"
import MainTitle from "../components/MainTitle.js"
import { TagIntro } from "../components/Tags.js"


const HomePage = () => {
    return(
        <Layout>
            <TagIntro
               text={subPageIntroTag.text} 
               date={subPageIntroTag.date} 
               rotate={subPageIntroTag.rotate} 
            />
            <MainTitle
                text={welcomeMention}
                link={otherSiteLink}
                isThin={false}
                color={"home"}
            />
        </Layout>
    )
}

export default HomePage