import styled from "styled-components"
import craft from "../../_data/img/_Source/craft.png"

export const TagIntro = styled.div`
    ${({theme}) => theme.deskTop`
        background-color: ${theme.colorObjs["subTagBackColor"]};
        margin-top: 1rem;
    `}
    ${({theme}) => theme.mobile`
        background-color: white;
        margin-top: 1rem;
    `}
    border: ${theme.lines["subTagLineBold"]};
    border-radius: .5rem;
    justify-self: start;
    position: relative;
    margin-left: 20%;
    padding: .1rem;
    width: 72%;

    &:before {
        border: ${theme.lines["subTagLineLight"]};
        padding-bottom: 108%;
        border-radius: .2rem;
        display: block;
        content: "";
    } 
    .tagContentExp {
        position: absolute;
        margin-right: 9%;
        margin-left: 8%;
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
            content: "time";
            display: block;
            height: 15%;
            width: 100%;
            bottom: 7%;
        }
    }
    ${({theme}) => theme.deskTop`
        &:hover {
            transform: rotate(${({rotate}) => rotate}deg);
            border-color: ${({hoverColor}) => hoverColor};
        }
        &:hover:before, &:hover .tagContentExp:before, &:hover .tagContentExp:after {
            border-color: ${({hoverColor}) => hoverColor};
            color: ${({hoverColor}) => hoverColor};
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
TagIntro.defaultProps = {
    hoverColor: theme.colorObjs["subTagBackColor"]
}

export const TagSticker = styled.div`
    ${({theme}) => theme.mobile`
        display: none;
    `}
    top: ${({isHome}) => isHome 
        ? "42" 
        : "47"
    }%;
    position: fixed;
    z-index: 60;
    left: 2%;
    
    .checkOutTag {
        font-family: ${({theme}) => theme.fontObjs["subTag"]["checkOutTag"]["fontFamily"]};
        font-weight: ${({theme}) => theme.fontObjs["subTag"]["checkOutTag"]["fontWeight"]};
        font-size: ${({theme}) => theme.fontObjs["subTag"]["checkOutTag"]["fontSize"]};
        box-shadow: .05rem .05rem .05rem rgba(0, 0, 0, .1);
        transform: rotate(-18deg); 
        background-color: white;
        letter-spacing: -.03rem;
        padding: .4rem .25rem;
        white-space: nowrap;
        position: absolute;
        cursor: move;
        left: 1rem;
        z-index: 3;

        .up {
            border: ${({theme}) => theme.lines["subTagInLineBold"]};
            border-radius: 0 0 .6rem .6rem;
            justify-content: center;
            box-sizing: border-box;
            margin-bottom: 3.5%;
            padding: 0 .4rem;
            font-weight: 400;
            display: flex;
            
            &:before {
                border-top: ${({theme}) => theme.lines["subTagInLineLight"]};
                width: calc(100% - 0.5rem);
                position: absolute;
                display: block;
                content: "";
                top: 5%;
            }
        }
        .down {
            border: ${({theme}) => theme.lines["subTagInLineBold"]};
            border-radius: .6rem .6rem 0 0;
            justify-content: center;
            font-weight: 800;
            display: flex;
            
            &:before {
                border-bottom: ${({theme}) => theme.lines["subTagInLineLight"]};
                width: calc(100% - 0.5rem);
                position: absolute;
                display: block;
                content: "";
                bottom: 5%;
            }
        }
        &:before {
            background-color: ${({theme}) => theme.colorObjs["subTagLineColor"]};
            width: calc(100% - 1.7rem);
            margin-right: auto;
            position: absolute;
            margin-left: auto;
            height: .01rem;
            display: block;
            content: "";
            bottom: 50%;
            right: 0;
            left: 0;
        }
    }
    .stkBack {
        background-color: ${({theme}) => theme.colorObjs["subStickerBackColor"]};
        border-bottom: ${({theme}) => theme.lines["subTagStkBackLineDark"]};
        border-right: ${({theme}) => theme.lines["subTagStkBackLineDark"]};
        flex-direction: row;
        padding-bottom: .5rem;
        padding-right: 1rem;
        padding-left: 1rem;
        padding-top: 2rem;
        margin-top: 3.5rem;
        position: absolute;
        display: flex;
        z-index: 1;
        gap: .8rem;
    }
`;
export const TagStickerInner = styled.div`
    transition: all .2s;

    .stkCircle {
        background-color: ${({mainColor}) => mainColor};
        box-shadow: .02rem .02rem .001rem rgba(0, 0, 0, 0.1);
        border-radius: .6rem;
        margin-bottom: .7rem;
        height: .6rem;
        width: .6rem;

        &:after {
            position: absolute;
            height: 1.3rem;
            width: 1.3rem;
            margin: auto;
            content: "";
        }
    }
    .stkCircleOff {
        box-shadow: .02rem .02rem .001rem rgba(0, 0, 0, 0.1);
        background-color: whtie;
        border-radius: .6rem;
        margin-bottom: .7rem;
        height: .6rem;
        width: .6rem;

        &:after {
            position: absolute;
            height: 1.3rem;
            width: 1.3rem;
            margin: auto;
            content: "";
        }
    }
`;
export const TagWrapper = styled.div`
    ${({theme}) => theme.mobile`
        border: ${theme.lines["subTagLineBold"]};
        border-radius: .5rem;
        justify-self: start;
        position: relative;
        margin-top: 1rem;
        margin-left: 20%;
        padding: .1rem;
        width: 72%;

        &:before {
            border: ${theme.lines["subTagLineLight"]};
            padding-bottom: 108%;
            border-radius: .2rem;
            display: block;
            content: "";
        } 
        &:after {
            border-top: ${theme.lines["subTagLineLightDashed"]};
            position: absolute;
            display: block;
            content: "";
            width: 99%;
            top: 47%;
        } 
    `}
`;

export const TagAbout = styled.div`
    ${({theme, rotate}) => theme.mobile`
        letter-spacing: -.045rem;
        word-spacing: -0.1rem;
        line-height: 1.6rem;
        position: absolute; 
        font-style: italic;
        font-size: .97rem;
        margin-left: 8.5%;
        color: #333;
        width: 85%;
        top: 13%;

        .tagContentExp {
        }
        .tagContentList {
            margin-top: 60%;
            display: flex;
            gap: .5rem;

            .tag {
                &:after {
                    content: ",";
                }
            }
        }
        .tagContentInfo {
            white-space: nowrap;
            margin-top: 90%;
            margin-top: rem;
        }

        strong {
            text-transform: uppercase;
            letter-spacing: -.0rem;
            word-spacing: -0.2rem;
            position: absolute;
            font-style: normal;
            margin-top: -11%;
            margin-left: -3%;
            font-size: .9rem;
        }
    `}
    ${({theme}) => theme.deskTop`
        background-color: ${theme.colorObjs["subTagBackColor"]};
        border: ${theme.lines["subTagLineBold"]};
        border-radius: .5rem;
        justify-self: start;
        position: relative;
        margin-top: 1rem;
        margin-left: 19%;
        padding: .1rem;
        width: 73%;
        &:before {
            border: ${theme.lines["subTagLineLight"]};
            justify-content: center;
            border-radius: .2rem;
            padding-bottom: 0rem;
            align-items: center;
            height: 4.65rem;
            display: flex;
            content: "";
        } 
        &:hover {
            color: ${theme.colorObjs["subTagTranslateTextColor"]};
            border: .25rem solid ${({hoverColor}) => hoverColor};
            transform: rotate(${({rotate}) => -(rotate+1)*5}deg);
            background-image: url("${craft}");
            background-repeat: no-repeat;
            background-position: center; 
            background-size: cover;
        }
        &:hover .tagContentExp {
            color: transparent;
        }
        &:hover:before {
            font-weight: ${theme.fontObjs["subTag"]["aboutContentExp"]["kor"]["fontWeight"]};
            font-family: ${theme.fontObjs["subTag"]["aboutContentExp"]["kor"]["fontFamily"]};
            font-size: ${theme.fontObjs["subTag"]["aboutContentExp"]["kor"]["fontSize"]};  
            border: .1rem solid ${({hoverColor}) => hoverColor};
            content: "${({content}) => content}";
            letter-spacing: -.04rem;
            padding-left: 1.3rem;
            padding-right: .6rem;
            line-height: 1.3rem;
            word-spacing: .1rem;
        }  

        .tagContentExp {
            font-family: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontFamily"]};
            font-weight: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontWeight"]};
            font-style: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontStyle"]};
            font-size: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontSize"]};  
            letter-spacing: -0.035rem;
            word-spacing: -0.02rem;
            line-height: 1.3rem;
            position: absolute;
            margin-right: 10%;
            margin-left: 12%;
            bottom: .5rem;
            top: .55rem;
            
            strong {
                letter-spacing: -0.03rem;
                font-style: normal;
                margin-left: -9%;
                margin-right: 3%;
            }
        }
        .tagContentList {
            font-weight: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontWeight"]};
            font-family: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontFamily"]};
            font-style: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontStyle"]};
            font-size: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontSize"]}; 
            letter-spacing: -0.03rem;
            line-height: 1.1rem; 
            position: absolute;
            word-spacing: 0rem;
            margin-left: 13%;
            display: flex;
            top: 2.6rem;
            gap: .5rem;

            .tag {
                &:after {
                    content: ",";
                }
            }

            strong {
                font-size: ${theme.fontObjs["subTag"]["pageContentList"]["strong"]["fontSize"]};
                margin-top: -1.5rem;
                position: absolute;
                font-style: normal;
                margin-right: auto;
                margin-left: auto;
            }
        }
        .tagContentInfo {
            font-weight: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontWeight"]};
            font-family: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontFamily"]};
            font-style: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontStyle"]};
            font-size: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontSize"]}; 
            letter-spacing: -0.03rem;
            white-space: nowrap;
            line-height: 1.1rem; 
            position: absolute;
            word-spacing: 0rem;
            margin-left: 13%;
            top: 2.6rem;

            strong {
                font-size: ${theme.fontObjs["subTag"]["pageContentList"]["strong"]["fontSize"]};
                margin-top: -1.5rem;
                margin-right: auto;
                position: absolute;
                font-style: normal;
                margin-left: auto;
            }
        }
    `}
`;