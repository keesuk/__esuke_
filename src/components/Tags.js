import styled from "styled-components"
import craft from "../_data/img/_Source/craft.png"


const TagIntroDiv = styled.div`
    ${({theme}) => theme.deskTop`
        background-color: ${theme.colorObjs["subTagBackColor"]};
        margin-bottom: 3%;
        margin-top: 4%;
        width: 24%;
    `}
    ${({theme}) => theme.mobile`
        background-color: white;
        margin-top: 10%;
        margin-bottom: 10%;
        margin-left: 24%;
        width: 65%;
    `}
    border: ${({theme}) => theme.lines["subTagLineBold"]};
    border-radius: .5rem;
    justify-self: start;
    position: relative;
    padding: .1rem;

    &:before {
        border: ${({theme}) => theme.lines["subTagLineLight"]};
        padding-bottom: 108%;
        border-radius: .2rem;
        display: block;
        content: "";
    } 
    .tagContentExp {
        margin-right: 9%;
        margin-left: 8%;
        position: absolute;
        bottom: .9rem;
        top: 1.1rem;
    
        .eng {
            ${({theme}) => theme.deskTop`
                font-size: ${theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontSize"]};  
                line-height: 1.4rem;
            `}
            ${({theme}) => theme.mobile`
                line-height: 1.8rem;
                font-size: .97rem;
            `}
            font-weight: ${({theme}) => theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontWeight"]};
            font-family: ${({theme}) => theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontFamily"]};
            font-style: ${({theme}) => theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontStyle"]};
            letter-spacing: -0.03rem;
            word-spacing: 0.03rem;
        }
        .kor {
            font-weight: ${({theme}) => theme.fontObjs["subTag"]["introContentExp"]["kor"]["fontWeight"]};
            font-family: ${({theme}) => theme.fontObjs["subTag"]["introContentExp"]["kor"]["fontFamily"]};
            font-style: ${({theme}) => theme.fontObjs["subTag"]["introContentExp"]["kor"]["fontStyle"]};
            font-size: ${({theme}) => theme.fontObjs["subTag"]["introContentExp"]["kor"]["fontSize"]};  
            color: ${({theme}) => theme.colorObjs["subTagTranslateTextColor"]};
            border-bottom: ${({theme}) => theme.lines["subTagTranslateLine"]};
            border-right: ${({theme}) => theme.lines["subTagTranslateLine"]};
            transform: rotate(${({rotate}) => rotate*3}deg);
            background-image: url("${craft}");
            background-repeat: no-repeat;
            background-position: center; 
            transition: visibility .04s;
            transition-delay: .15s;
            letter-spacing: -0.03rem;
            padding-bottom: 1.2rem;
            padding-left: 1.2rem;
            padding-right: 1rem;
            padding-top: 2rem;
            word-spacing: .16rem;
            background-size: cover;
            border-radius: .15rem;
            line-height: 1.4rem;
            margin-top: -10rem;
            visibility: hidden;

            &:before {
                background-color: ${({theme}) => theme.colorObjs["subTagTranslateTapeColor"]};
                transform: rotate(${({rotate}) => -rotate*2}deg);
                position: absolute;
                display: block;
                margin: auto;
                content: "";
                height: 40%;
                width: 16%;
                top: -28%;
                left: 30%;
            }
        }

        &:before {
            ${({theme}) => theme.deskTop`
                font-size: ${theme.fontObjs["subTag"]["introContentExp"]["down"]["fontSize"]};
                line-height: 3.5rem;
            `}
            ${({theme}) => theme.mobile`
                line-height: 4rem;
                font-size: .8rem;
            `}
            border-bottom: ${({theme}) => theme.lines["subTagLineLight"]};
            color: ${({theme}) => theme.colorObjs["subTagLineColor"]};
            position: absolute;
            font-weight: 500;
            content: "date";
            display: block;
            bottom: 22%;
            width: 100%;
            height: 15%;
        }
        &:after {
            ${({theme}) => theme.deskTop`
                font-size: ${theme.fontObjs["subTag"]["introContentExp"]["down"]["fontSize"]};
                line-height: 3.5rem;
            `}
            ${({theme}) => theme.mobile`
                line-height: 4rem;
                font-size: .8rem;
            `}
            border-bottom: ${({theme}) => theme.lines["subTagLineLight"]};
            color: ${({theme}) => theme.colorObjs["subTagLineColor"]};
            position: absolute;
            font-weight: 500;
            content: "sign";
            display: block;
            height: 15%;
            width: 100%;
            bottom: 7%;
        }
    }
    ${({theme}) => theme.deskTop`
        &:hover {
            transform: rotate(${({rotate}) => rotate}deg);
            border-color: ${({hoverColor}) => hoverColor
                ? hoverColor
                : theme.colorObjs["subTagLineColor"]
            };
        }
        &:hover:before, &:hover .tagContentExp:before, &:hover .tagContentExp:after {
            border-color: ${({hoverColor}) => hoverColor
                ? hoverColor
                : theme.colorObjs["subTagLineColor"]
            };
            color: ${({hoverColor}) => hoverColor
                ? hoverColor
                : theme.colorObjs["subTagLineColor"]
            };
        }
        &:hover .tagContentExp > .kor {
            visibility: visible;
        }
    `}
    .tagSubText {
        ${({theme}) => theme.deskTop`
            font-size: ${theme.fontObjs["subTag"]["introDate"]["fontSize"]};
            letter-spacing: .05rem;
        `}
        ${({theme}) => theme.mobile`
            letter-spacing: .05rem;
            font-size: 1.5rem;
        `}
        font-family: ${({theme}) => theme.fontObjs["subTag"]["introDate"]["fontFamily"]};
        font-weight: ${({theme}) => theme.fontObjs["subTag"]["introDate"]["fontWeight"]};
        position: absolute;
        right: 7.5%;
        bottom: 26%;
    }
`

export const TagIntro = ({text, date, rotate}) => {

    return(
        <TagIntroDiv rotate={rotate}>
            <div className="tagContentExp">
                <div className="eng">
                    {text["eng"]}
                </div>
                <div className="kor">
                    {text["kor"]}
                </div>
            </div>
            <div className="tagSubText">
                {date}
            </div>
        </TagIntroDiv>
    )
}