import styled from "styled-components";
import { line_4, all_portFolio } from "../_data/_Functions.jsx";

const FolioListDiv = styled.div` 
    border-top: ${line_4};
    padding-top: 4vh;
    margin-top: 12vh;
    display: grid;
    
    @media all and (min-width:0px) and (max-width:1023px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: .9em;
        grid-auto-rows: minmax(5em, auto);
    }
    @media all and (min-width:1024px) and (max-width:1500px){
        grid-template-columns: repeat(3, 1fr);
        grid-gap: .9em;
        grid-auto-rows: minmax(5em, auto);
    }
    @media all and (min-width:1501px)and (max-width:1800px){
        grid-template-columns: repeat(4, 1fr);
        grid-gap: .6em;
        grid-auto-rows: minmax(5em, auto);
    }
    @media all and (min-width:1801px){
        grid-template-columns: repeat(5, 1fr);
        grid-gap: .6em;
        grid-auto-rows: minmax(5em, auto);
    }
    .img {
        width: 100%;
    }
    .content_text {
        font-size: .8em;
        padding-top: .2em;
        padding-bottom: 1.5em;
        letter-spacing: -.05em;
        font-weight: 400;
    
        strong {
            font-weight: 600;
            letter-spacing: -.03em;
    }}
    button {
        position: relative;
        width: 100%;
    }
`;
const ImgButton = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    &:after { 
        content: "";
        position: absolute;
        border-top: 0.25em solid ${props => props.color};
        height: 95%;
        width: 100%;
        transform: translateY(45%);
        visibility: hidden;
    }
    &:hover:after { 
        visibility: visible;
    }
`;

const FolioList = () => {
    return(
        <FolioListDiv>
            {all_portFolio.map(v => 
                <Link 
                    to={v["title"]}
                    key={v["title"]}
                >
                    <button>
                        <ImgButton color={v["color"]}/>
                        <img 
                            className="img" 
                            src={v["img"]} 
                            alt={""} 
                        />
                        <div className="content_text">
                            <strong>{v["title"]}</strong> {v["category"]}
                        </div>
                    </button>
                </Link>
            )}
        </FolioListDiv>
    )
}

export default FolioList;