import styled from "styled-components"
import craft from "../_data/img/_Source/craft.png"


const TagIntroDiv = styled.div`
    ${({theme}) => theme.deskTop`
        background-color: ${theme.colorObjs["subTagBackColor"]};
        margin-bottom: 15%;
        margin-top: 2.8rem;
        width: 23%;
    `}
    ${({theme}) => theme.mobile`
        background-color: white;
        margin-bottom: 10%;
        margin-left: 24%;
        margin-top: 10%;
        width: 65%;
    `}
    border: ${({theme}) => theme.lines["subTagLineBold"]};
    border-radius: .6rem;
    justify-self: start;
    position: relative;
    padding: .14rem;

    &:before {
        border: ${({theme}) => theme.lines["subTagLineLight"]};
        padding-bottom: 120%;
        border-radius: .3rem;
        display: block;
        content: "";
    } 
    .tagContentExp {
        position: absolute;
        margin-right: 9%;
        margin-left: 8%;
        bottom: 1rem;
        top: 1.2rem;
    
        .eng {
            ${({theme}) => theme.deskTop`
                letter-spacing: -0.05rem;
                word-spacing: -.03rem;
                font-size: .85rem;  
                line-height: 1.6rem;
            `}
            ${({theme}) => theme.mobile`
                letter-spacing: -0.03rem;
                word-spacing: 0.03rem;
                line-height: 1.8rem;
                font-size: .97rem;
            `}
            font-weight: ${({theme}) => theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontWeight"]};
            font-family: ${({theme}) => theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontFamily"]};
            font-style: ${({theme}) => theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontStyle"]};
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
            padding-bottom: 1.2rem;
            padding-left: 1.2rem;
            padding-right: 1rem;
            padding-top: 2rem;
            background-repeat: no-repeat;
            background-position: center; 
            transition: visibility .04s;
            letter-spacing: -0.03rem;
            transition-delay: .15s;
            background-size: cover;
            border-radius: .15rem;
            word-spacing: .16rem;
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
                font-size: .7rem;
                line-height: 3.8rem;
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
                font-size: .7rem;
                line-height: 3.8rem;
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

    &:hover {
        transform: rotate(${({rotate}) => rotate}deg);
        border-color: ${({hoverColor, theme}) => hoverColor
            ? hoverColor
            : theme.colorObjs["subTagLineColor"]
        };
    }
    &:hover:before, &:hover .tagContentExp:before, &:hover .tagContentExp:after {
        border-color: ${({hoverColor, theme}) => hoverColor
            ? hoverColor
            : theme.colorObjs["subTagLineColor"]
        };
        color: ${({hoverColor, theme}) => hoverColor
            ? hoverColor
            : theme.colorObjs["subTagLineColor"]
        };
    }

    &:hover .tagContentExp > .kor {
        visibility: visible;
    }
    .tagSubText {
        ${({theme}) => theme.deskTop`
        letter-spacing: .05rem;
            font-size: 1.4rem;
        `}
        ${({theme}) => theme.mobile`
            letter-spacing: .05rem;
            font-size: 1.5rem;
        `}
        font-family: ${({theme}) => theme.fontObjs["subTag"]["introDate"]["fontFamily"]};
        font-weight: ${({theme}) => theme.fontObjs["subTag"]["introDate"]["fontWeight"]};
        position: absolute;
        bottom: 26%;
        right: 8%;
    }
`

export const TagIntro = ({text, date, rotate}) => {

    return(
        <TagIntroDiv rotate={rotate}>
            <div className="tagContentExp">
                <div
                    dangerouslySetInnerHTML={{__html: text.eng.replace(/\n/g, '<br/>')}}
                    className="eng"  
                />
                <div 
                    dangerouslySetInnerHTML={{__html: text.kor.replace(/\n/g, '<br/>')}}
                    className="kor"
                />
            </div>
            <div className="tagSubText">
                {date}
            </div>
        </TagIntroDiv>
    )
}