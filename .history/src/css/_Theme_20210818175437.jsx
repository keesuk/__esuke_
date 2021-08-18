import raw from "./_Raw.jsx"

const { 
    colors, 
    fontSizes, 
    fontFamilys, 
    fontWeights } = raw


const colorObjs = {

    "mainLayoutBackColor" : colors["white"],
    "mainLayoutLineColor" : colors["black"],

    "mark": colors["yellowGreen"],

    "homeButtonColor" : colors["black"],
    "homeButtonHover": "linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)",

    "cellEmptyBackColor" : colors["middleLightDeepGrey"],
    "cellEmptyTextColor" : colors["deepSkyblue"],
    "cellEmptyLineColor" : colors["lightSkyblue"],

    "instagramColor": colors["instagram"],
    "githubColor": colors["github"],

//----------------서브------------------
    "subLayoutBackColor" : colors["middleLightGrey"],
    "subPageTitleColor" : colors["black"],
    "subPageLineColor" : colors["black"],

    "subTagBackColor" : colors["lightGrey"],
    "subTagTranslateLineColor" : colors["deepDeepYellow"],
    "subTagTranslateTextColor" : colors["white"],
    "subTagTranslateTapeColor" : "rgba(900, 900, 900, .6)",
    "subTagLineColor" : colors["orangeRed"],
    "subTagLineLightColor" : colors["orangeRedLight"],
    "subStickerBackColor" : "rgba(999, 999, 999, .6)",
    "subTagStkBackLineDarkColor" : colors["middleGrey"],
    "subTagStkBackLineLightColor" : colors["middleLightGrey"],

    "subMenuAboutMeColor" : colors["white"],
    "subMenuContactColor" : colors["white"],
    "subMenuAboutMeDeepColor" : colors["deepGrey"],
    "subMenuContactDeepColor" : colors["deepGrey"],
    "subMenuTapeColorUp" : ["rgba(100, 10, 250, .5)", "rgba(255, 0, 0, .5)"],
    "subMenuTapeColorDown" : ["rgba(0, 255, 255, .5)", "rgba(255, 0, 255, .5)"],
    
    "subMenuColor": colors["yellow"],
    "subMenuBorColor": colors["deepYellow"],

//----------------포폴------------------
    "pigeonColor": colors["pigeon"],
    "pigeonSubColor": colors["pink"],
    "pigeonBackColor": colors["white"],
    "pigeonTextColor": colors["black"],
    "pigeonImgBoxBackColor": colors["black"],

    "gmfColor": colors["gmf"],
    "gmfSubColor": colors["deepMint"],
    "gmfBackColor": colors["deepMiddleMint"],
    "gmfTextColor": colors["black"],

    "rulerColor": colors["ruler"],
    "rulerSubColor": colors["blue"],
    "rulerBackColor": colors["middleLightMiddleGrey"],
    "rulerTextColor": colors["black"],
    "rulerImgBoxBackColor": colors["black"],

    "samsaraColor": colors["samsara"],
    "samsaraSubColor": colors["deepPurple"],
    "samsaraBackColor": colors["deepDarkPurple"],
    "samsaraTextColor": colors["white"],

    "onvoyageColor": colors["black"],
    "onvoyageSubColor": colors["white"],
    "onvoyageBackColor": colors["black"],
    "onvoyageTextColor": colors["white"],

    "seoulColor": colors["middleDeepGrey"],
    "seoulSubColor": colors["black"],
    "seoulBackColor": colors["white"],
    "seoulTextColor": colors["black"],
    
    "weDelColor": colors["weDel"],
    "weDelSubColor": colors["darkGreen"],
    "weDelBackColor": colors["white"],
    "weDelTextColor": colors["black"],

    "weEatColor": colors["weEat"],
    "weEatSubColor": colors["orangeRed"],
    "weEatBackColor": colors["white"],
    "weEatTextColor": colors["black"],

//----------------페이지------------------
    "pageModulesOuterImgBoxLineColor" : colors["middleLightDeepGrey"],

    "remarkTextColor" : colors["lightBlack"],
    "InnerBackgroundColor" : colors["black"],
}

const lines = {
    "mainLayoutLine": `0.2rem solid ${colorObjs["mainLayoutLineColor"]}`,

    "subPageLine" : `0.12rem dashed ${colorObjs["subPageLineColor"]}`,
    "subTagLineBold": `0.25rem solid ${colorObjs["subTagLineColor"]}`,
    "subTagLineLight": `0.1rem solid ${colorObjs["subTagLineColor"]}`,
    "subTagInLineBold": `0.13rem solid ${colorObjs["subTagLineColor"]}`,
    "subTagInLineLight": `0.1rem solid ${colorObjs["subTagLineLightColor"]}`,
    "subTagTranslateLine" : `.15rem solid ${colorObjs["subTagTranslateLineColor"]}`,
    "subTagStkBackLineDark": `0.02rem solid ${colorObjs["subTagStkBackLineDarkColor"]}`,
    "subTagStkBackLineLight": `0.02rem solid ${colorObjs["subTagStkBackLineLightColor"]}`,

    "subMenuAboutMeLine": `0.12rem solid ${colorObjs["subMenuAboutMeDeepColor"]}`,
    "subMenuContactLine": `0.12rem solid ${colorObjs["subMenuContactDeepColor"]}`,
    "postItContentLine" : `0.12rem solid `,

    "cellEmptyLine": `0.15rem dashed ${colorObjs["cellEmptyLineColor"]}`,

    "pageModulesOuterImgBoxLine" : `.05rem solid ${colorObjs["pageModulesOuterImgBoxLineColor"]}`,
}

const fontObjs = {
    "mainTitle" : {
        "fontWeight" : {
            "home" : fontWeights["medium"],
            "page" : fontWeights["regular"],
        },
        "fontFamily" : fontFamilys["engMono"],
        "fontSize" : fontSizes["A1"],
        "mark" : {
            "fontStyle" : {
                "home" : "italic",
                "page" : "",
            },
            "fontWeight" : {
                "home" : fontWeights["semiBold"],
                "page" : fontWeights["regular"],
            }
        }
    },
    "linkA" : {
        "fontWeight" : fontWeights["medium"],
        "fontFamily" : fontFamilys["engMono"],
        "fontSize" : fontSizes["A7"],
    },
    "cell" : {
        "fontWeight" : fontWeights["regular"],
        "fontFamily" : fontFamilys["engMono"],
        "fontSize" : fontSizes["A8"],
        "strong" : {
            "fontWeight" : fontWeights["semiBold"],
        }
    },
    "cellEmpty" : {
        "fontWeight" : fontWeights["semiBold"],
        "fontFamily" : fontFamilys["engMono"],
        "fontSize" : fontSizes["A11"],
        "fontStyle" : "italic",
    },
    "subTag" : {
        "introDate" : {
            "fontWeight" : fontWeights["extraLight"],
            "fontFamily" : fontFamilys["korSans"],
            "fontSize" : fontSizes["A5"]
        },
        "introContentExp" : {
            "eng" : {
                "fontWeight" : fontWeights["regular"],
                "fontFamily" : fontFamilys["engMono"],
                "fontSize" : fontSizes["A10"],
                "fontStyle" : "italic",
                "strong" : {
                    "fontWeight" : fontWeights["semiBold"],
                }
            },
            "kor" : {
                "fontWeight" : fontWeights["regular"],
                "fontFamily" : fontFamilys["korSerif"],
                "fontSize" : fontSizes["A9"],
                "fontStyle" : "normal",
                "strong" : {
                    "fontWeight" : fontWeights["semiBold"],
                }
            },
            "down" : {
                "fontSize" : fontSizes["A11"],
            }
        },
        "aboutContentExp" : {
            "eng" : {
                "fontWeight" : fontWeights["regular"],
                "fontFamily" : fontFamilys["engMono"],
                "fontSize" : fontSizes["A10.5"],
                "fontStyle" : "italic",
                "strong" : {
                    "fontWeight" : fontWeights["semiBold"],
                }
            },
            "kor" : {
                "fontWeight" : fontWeights["medium"],
                "fontFamily" : fontFamilys["korSans"],
                "fontSize" : fontSizes["A10"],
                "fontStyle" : "normal",
                "strong" : {
                    "fontWeight" : fontWeights["semiBold"],
                }
            }
        },
        "checkOutTag" : {
            "fontWeight" : fontWeights["medium"],
            "fontFamily" : fontFamilys["engMono"],
            "fontSize" : fontSizes["A10"]
        },
        "pageContentExp" : {
            "fontWeight" : fontWeights["regular"],
            "fontFamily" : fontFamilys["engMono"],
            "fontSize" : fontSizes["A12"],
            "fontStyle" : "italic",
            "strong" : {
                "fontWeight" : fontWeights["semiBold"],
            }
        },
        "pageContentList" : {
            "fontWeight" : fontWeights["regular"],
            "fontFamily" : fontFamilys["engMono"],
            "fontSize" : fontSizes["A12"],
            "fontStyle" : "italic",
            "strong" : {
                "fontWeight" : fontWeights["semiBold"],
                "fontSize" : fontSizes["A8"],
            }
        }
    },
    "subTitle" : {
        "fontWeight" : fontWeights["medium"],
        "fontFamily" : fontFamilys["engMono"],
        "fontSize" : fontSizes["A4"],
        "mark" : {
            "fontSize" : fontSizes["A2"],
        }
    },
    "mainText" : {
        "eng" : {
            "fontWeight" : fontWeights["medium"],
            "fontFamily" : fontFamilys["engSerif"],
            "fontSize" : fontSizes["A4"]
        },
        "kor" : {
            "fontWeight" : fontWeights["light"],
            "fontFamily" : fontFamilys["korSans"],
            "fontSize" : fontSizes["A9"],
            "num" : {
                "fontWeight" : fontWeights["light"],
                "fontFamily" : fontFamilys["engSerif"],
                "fontSize" : fontSizes["A6"]
            }
        },
    },
    "subText" : {
        "eng" : {
            "fontWeight" : fontWeights["regular"],
            "fontFamily" : fontFamilys["engMono"],
            "fontSize" : fontSizes["A9"],
            "fontStyle" : "italic",
        },
        "kor" : {
            "fontWeight" : fontWeights["light"],
            "fontFamily" : fontFamilys["korSans"],
            "fontSize" : fontSizes["A9"],
            "num" : {
                "fontWeight" : fontWeights["light"],
                "fontFamily" : fontFamilys["engSerif"],
                "fontSize" : fontSizes["A6"]
            }
        },
    },
    "remark" : {
        "eng" : {
            "fontWeight" : fontWeights["medium"],
            "fontFamily" : fontFamilys["engMono"],
            "fontSize" : fontSizes["A12"],
            "fontStyle" : "italic",
        },
        "kor" : {
            "fontFamily" : fontFamilys["korSerif"],
            "fontSize" : fontSizes["A12"],
        },
    }
}

const layoutRatio = {
    "sub" : 29,
    "main" : 71,
    "topMargin" : 6.8,
}

const theme = {
    colorObjs,
    fontObjs,
    lines,
    layoutRatio,
}

export default theme;