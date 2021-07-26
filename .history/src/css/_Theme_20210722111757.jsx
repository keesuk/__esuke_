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
    "subTagLineColor" : colors["orangeRed"],
    "subTagLineLightColor" : colors["orangeRedLight"],
    "subStickerBackColor" : "rgba(999, 999, 999, .6)",
    "subTagStkBackLineDarkColor" : colors["middleGrey"],
    "subTagStkBackLineLightColor" : colors["middleLightGrey"],

    "subMenuAboutMeColor" : colors["yellow"],
    "subMenuContactColor" : colors["pink"],
    "subMenuAboutMeDeepColor" : colors["deepYellow"],
    "subMenuContactDeepColor" : colors["deepPink"],
    "subMenuTapeColorUp" : ["purple", "red"],
    "subMenuTapeColorDown" : ["cyan", "green"],
    
    "subMenuColor": colors["yellow"],
    "subMenuBorColor": colors["deepYellow"],

//----------------포폴------------------
    "pigeonColor": colors["pigeon"],
    "pigeonSubColor": colors["pink"],
    "pigeonBackColor": colors["white"],
    "pigeonTextColor": colors["black"],
    "rulerImgBoxBackColor": colors["black"],

    "gmfColor": colors["gmf"],
    "gmfSubColor": colors["deepMint"],
    "gmfBackColor": colors["deepMiddleMint"],
    "gmfTextColor": colors["black"],

    "rulerColor": colors["ruler"],
    "rulerSubColor": colors["blue"],
    "rulerBackColor": colors["middleLightMiddleGrey"],
    "rulerTextColor": colors["black"],
    "rulerImgBoxBackColor": colors["deepDeepBlue"],

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

//----------------페이지------------------
    "pageModulesOuterImgBoxLineColor" : colors["middleLightDeepGrey"],

    "remarkTextColor" : colors["lightBlack"],
    "InnerBackgroundColor" : colors["black"],
}

const lines = {
    "mainLayoutLine": `0.2rem solid ${colorObjs["mainLayoutLineColor"]}`,

    "subPageLine" : `0.12rem dashed ${colorObjs["subPageLineColor"]}`,
    "subTagLineBold": `0.22rem solid ${colorObjs["subTagLineColor"]}`,
    "subTagLineLight": `0.1rem solid ${colorObjs["subTagLineColor"]}`,
    "subTagInLineBold": `0.13rem solid ${colorObjs["subTagLineColor"]}`,
    "subTagInLineLight": `0.05rem solid ${colorObjs["subTagLineLightColor"]}`,
    "subTagStkBackLineDark": `0.02rem solid ${colorObjs["subTagStkBackLineDarkColor"]}`,
    "subTagStkBackLineLight": `0.02rem solid ${colorObjs["subTagStkBackLineLightColor"]}`,

    "subMenuAboutMeLine": `0.13rem solid ${colorObjs["subMenuAboutMeDeepColor"]}`,
    "subMenuContactLine": `0.13rem solid ${colorObjs["subMenuContactDeepColor"]}`,
    "postItContentLine" : `0.13rem solid`,

    "cellEmptyLine": `0.11rem solid ${colorObjs["cellEmptyLineColor"]}`,

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
            "fontWeight" : fontWeights["regular"],
            "fontFamily" : fontFamilys["engMono"],
            "fontSize" : fontSizes["A11"],
            "fontStyle" : "italic",
            "strong" : {
                "fontWeight" : fontWeights["semiBold"],
            }
        },
        "checkOutTag" : {
            "fontWeight" : fontWeights["medium"],
            "fontFamily" : fontFamilys["engMono"],
            "fontSize" : fontSizes["A9"]
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
    "topMargin" : 3,
}

const theme = {
    colorObjs,
    fontObjs,
    lines,
    layoutRatio,
}

export default theme;