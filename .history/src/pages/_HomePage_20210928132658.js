import { welcomeMention, otherSiteLink } from "../_data/_Data.jsx"
import { MainLayout } from "../components/_Layout.jsx"
import MainTitle from "../components/Main/MainTitle.jsx"
import FolioList from "../components/Main/FolioList.jsx"


const HomePage = () => {
    return(
        <MainLayout>
            <MainTitle
                text={welcomeMention}
                link={otherSiteLink}
                isThin={false}
                color={"home"}
            />
            <FolioList
                subTitle={null}
            />
        </MainLayout>
    )
}

export default HomePage