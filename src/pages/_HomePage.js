import { welcomeMention, otherSiteLink, subPageIntroTag } from "../_data/_Data.jsx"
import Layout from "../components/_Layout.jsx"
import MainTitle from "../components/Main/MainTitle.js"
import FolioList from "../components/Main/FolioList.js"
import { TagIntro } from "../components/Sub/Tags.js"


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
            <FolioList
                subTitle={null}
            />
        </Layout>
    )
}

export default HomePage