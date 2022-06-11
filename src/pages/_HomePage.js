import { TagIntro } from "../components/Tags.js"
import { introTag } from "../_data/_Data.jsx"
import Layout from "../css/_Layout.jsx"


const HomePage = () => {
    return(
        <Layout>
            <TagIntro
               rotate={introTag.rotate} 
               text={introTag.text} 
               date={introTag.date} 
            />
        </Layout>
    )
}

export default HomePage