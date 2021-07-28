import styled from "styled-components";
import theme from "../../css/_Theme.jsx"
import craft from "../../_data/img/craft.png"

export const TagIntro = styled.div`
    margin-top: 1rem;
    background-color: ${theme.colorObjs["subTagBackColor"]};
    justify-self: start;
    margin-left: 20%;
    width: 72%;
    padding: .1rem;
    border-radius: .5rem;
    position: relative;
    border: ${theme.lines["subTagLineBold"]};
    &:hover {
        border-color:  ${props => props.default
            ? theme.colorObjs["subTagBackColor"]
            : props.hoverColor
        };
        transform: rotate(${({rotate}) => rotate}deg);
    }

    &:before {
        content: "";
        display: block;
        padding-bottom: 110%;
        border-radius: .2rem;
        border: ${theme.lines["subTagLineLight"]};
    } 
    .tagContentExp {
        margin-left: 7%;
        margin-right: 8%;
        position: absolute;
        top: .9rem;
        bottom: .9rem;
    
        .eng {
            line-height: 1.2rem;
            font-size: ${theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontSize"]};  
            font-style: ${theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontStyle"]};
            font-weight: ${theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontWeight"]};
            font-family: ${theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontFamily"]};
        }
        .kor {
            transition-delay: .15s;
            line-height: 1.2rem;
            padding-top: 2rem;
            padding-bottom: 1.5rem;
            padding-left: 1rem;
            padding-right: 1.5rem;
            margin-top: -7rem;
            background-image: url("${craft}");
            background-position: center; 
            background-repeat: no-repeat;
            background-size: cover;
            color: ${theme.colorObjs["subTagTranslateTextColor"]};
            border-bottom: ${theme.lines["subTagTranslateLine"]};
            border-right: ${theme.lines["subTagTranslateLine"]};
            font-size: ${theme.fontObjs["subTag"]["introContentExp"]["kor"]["fontSize"]};  
            font-style: ${theme.fontObjs["subTag"]["introContentExp"]["kor"]["fontStyle"]};
            font-weight: ${theme.fontObjs["subTag"]["introContentExp"]["kor"]["fontWeight"]};
            font-family: ${theme.fontObjs["subTag"]["introContentExp"]["kor"]["fontFamily"]};
            letter-spacing: -0.03rem;
            word-spacing: .16rem;
            border-radius: .15rem;
            visibility: hidden;
            transform: rotate(${({rotate}) => rotate*3}deg);
            transition: visibility .04s;

            &:before {
                content: "";
                display: block;
                position: absolute;
                top: -30%;
                left: 30%;
                margin: auto;
                background-color: ${theme.colorObjs["subTagTranslateTapeColor"]};
                transform: rotate(${({rotate}) => -rotate*2}deg);
                width: 15%;
                height: 40%;
            }
        }

        &:before {
            content: "date";
            display: block;
            position: absolute;
            bottom: 25%;
            width: 100%;
            height: 15%;
            color: ${theme.colorObjs["subTagLineColor"]};
            font-size: ${theme.fontObjs["subTag"]["introContentExp"]["down"]["fontSize"]};  
            line-height: 3.7rem;
            border-bottom: ${theme.lines["subTagLineLight"]};
        }
        &:after {
            content: "sign";
            display: block;
            position: absolute;
            bottom: 10%;
            width: 100%;
            height: 15%;
            color: ${theme.colorObjs["subTagLineColor"]};
            font-size: ${theme.fontObjs["subTag"]["introContentExp"]["down"]["fontSize"]};  
            line-height: 3.7rem;
            border-bottom: ${theme.lines["subTagLineLight"]};
        }
    }
    &:hover:before, &:hover .tagContentExp:before, &:hover .tagContentExp:after {
        border-color: ${({hoverColor}) => hoverColor};
        color: ${({hoverColor}) => hoverColor};
    }
    &:hover .tagContentExp > .kor {
        visibility: visible;
    }
    .tagSubText {
        position: absolute;
        right: 7%;
        bottom: 28%;
        font-family: ${theme.fontObjs["subTag"]["introDate"]["fontFamily"]};
        font-size: ${theme.fontObjs["subTag"]["introDate"]["fontSize"]};
        font-weight: ${theme.fontObjs["subTag"]["introDate"]["fontWeight"]};
        letter-spacing: .05rem;
    }
`;
export const TagSticker = styled.div`
    top: ${({isHome}) => isHome === true ? "40" : "45"}%;
    position: fixed;
    
    .checkOutTag {
        transform: rotate(-20deg); 
        padding: .4rem .25rem;
        background-color: white;
        white-space: nowrap;
        letter-spacing: -.03rem;
        font-size: ${theme.fontObjs["subTag"]["checkOutTag"]["fontSize"]};
        font-family: ${theme.fontObjs["subTag"]["checkOutTag"]["fontFamily"]};
        font-weight: ${theme.fontObjs["subTag"]["checkOutTag"]["fontWeight"]};
        position: absolute;
        left: 1rem;
        z-index: 3;

        .up {
            border: ${theme.lines["subTagInLineBold"]};
            display: flex;
            justify-content: center;
            padding: 0 .4rem;
            margin-bottom: 3.5%;
            border-radius: 0 0 .6rem .6rem;
            box-sizing: border-box;
            
            &:before {
                content: "";
                border-top: ${theme.lines["subTagInLineLight"]};
                width: calc(100% - 0.5rem);
                top: 6%;
                display: block;
                position: absolute;
            }
        }
        .down {
            border: ${theme.lines["subTagInLineBold"]};
            display: flex;
            justify-content: center;
            border-radius: .6rem .6rem 0 0;
            
            &:before {
                content: "";
                border-bottom: ${theme.lines["subTagInLineLight"]};
                width: calc(100% - 0.5rem);
                bottom: 6%;
                display: block;
                position: absolute;
            }
        }
        &:before {
            content: "";
            bottom: 50%;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            width: calc(100% - 1.7rem);
            height: .01rem;
            background-color: ${theme.colorObjs["subTagLineColor"]};
            display: block;
            position: absolute;
        }
    }
    .stkBack {
        position: absolute;
        z-index: 1;
        margin-top: 3.5rem;
        padding-top: 2rem;
        padding-right: 1rem;
        padding-left: 1rem;
        padding-bottom: 1rem;
        background-color: ${theme.colorObjs["subStickerBackColor"]};
        border-bottom: ${theme.lines["subTagStkBackLineDark"]};
        border-right: ${theme.lines["subTagStkBackLineDark"]};
        border-top: ${theme.lines["subTagStkBackLineLight"]};
        border-left: ${theme.lines["subTagStkBackLineLight"]};
        display: flex;
        flex-direction: row;
        gap: .8rem;
    }
`;
export const TagStickerInner = styled.div`
    transition: all .2s;

    .stkCircle {
        background-color: ${({mainColor}) => mainColor};
        width: .6rem;
        height: .6rem;
        border-radius: .6rem;
        margin-bottom: .7rem;
        box-shadow: .02rem .02rem .001rem rgba(0, 0, 0, 0.1);

        &:after {
            content: "";
            width: 1.3rem;
            height: 1.3rem;
            position: absolute;
            margin: auto;
        }
    }
    .stkCircleOff {
        background-color: whtie;
        width: .6rem;
        height: .6rem;
        border-radius: .6rem;
        margin-bottom: .7rem;
        box-shadow: .02rem .02rem .001rem rgba(0, 0, 0, 0.1);

        &:after {
            content: "";
            width: 1.3rem;
            height: 1.3rem;
            position: absolute;
            margin: auto;
        }
    }
`;

export const TagAbout = styled.div`
    margin-top: 1rem;
    background-color: ${theme.colorObjs["subTagBackColor"]};
    justify-self: start;
    margin-left: 20%;
    width: 72%;
    padding: .1rem;
    border-radius: .5rem;
    position: relative;
    border: ${theme.lines["subTagLineBold"]};
    &:before {
        content: "";
        display: block;
        height: 4.6rem;
        border-radius: .2rem;
        border: ${theme.lines["subTagLineLight"]};
    } 
    &:hover {
        color: ${theme.colorObjs["subTagTranslateTextColor"]};
        border: .22rem solid ${({hoverColor}) => hoverColor};
        transform: rotate(${({rotate}) => rotate}deg);
        background-image: url("${craft}");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
    }
    &:hover:before {
        border: .1rem solid ${({hoverColor}) => hoverColor};
        content: "${({content}) => content}";
        line-height: 1rem;
        padding-left: 1.2rem;
        padding-right: .6rem;
        padding-top: .5rem;
        padding-bottom: 0rem;
        letter-spacing: -.04rem;
        word-spacing: .035rem;
        font-size: ${theme.fontObjs["subTag"]["aboutContentExp"]["kor"]["fontSize"]};  
        font-weight: ${theme.fontObjs["subTag"]["aboutContentExp"]["kor"]["fontWeight"]};
        font-family: ${theme.fontObjs["subTag"]["aboutContentExp"]["kor"]["fontFamily"]};
    }  
    &:hover .tagContentExp {
        color: transparent;
    }
    .tagContentExp {
        margin-left: 10%;
        margin-right: 10%;
        position: absolute;
        top: .5rem;
        bottom: .5rem;
        line-height: 1.1rem;
        font-size: ${theme.fontObjs["subTag"]["pageContentExp"]["fontSize"]};
        font-style: ${theme.fontObjs["subTag"]["pageContentExp"]["fontStyle"]};
        font-weight: ${theme.fontObjs["subTag"]["pageContentExp"]["fontWeight"]};
        font-family: ${theme.fontObjs["subTag"]["pageContentExp"]["fontFamily"]};
        
        strong {
            margin-left: -5%;
            margin-right: 3%;
            font-weight: ${theme.fontObjs["subTag"]["pageContentExp"]["strong"]["fontWeight"]};
        }
    }
    .tagContentList {
        margin-left: 20%;
        position: absolute;
        top: 2.5rem;
        bottom: .5rem;
        line-height: 1.1rem;
        white-space: nowrap;
        font-size: ${theme.fontObjs["subTag"]["pageContentList"]["fontSize"]};
        font-style: ${theme.fontObjs["subTag"]["pageContentList"]["fontStyle"]};
        font-weight: ${theme.fontObjs["subTag"]["pageContentList"]["fontWeight"]};
        font-family: ${theme.fontObjs["subTag"]["pageContentList"]["fontFamily"]};

        strong {
            position: absolute;
            margin-top: -15%;
            margin-left: auto;
            margin-right: auto;
            font-weight: ${theme.fontObjs["subTag"]["pageContentList"]["strong"]["fontWeight"]};
            font-size: ${theme.fontObjs["subTag"]["pageContentList"]["strong"]["fontSize"]};
        }
    }

`;