import raw from "./_Raw.jsx"

const colors = raw.colors, 
    fontSizes = raw.fontSizes,
    fontFamilys = raw.fontFamilys,
    fontWeights = raw.fontWeights


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

    "gmfColor": colors["gmf"],
    "gmfSubColor": colors["deepMint"],
    "gmfBackColor": colors["deepMiddleMint"],
    "gmfTextColor": colors["black"],

    "rulerColor": colors["ruler"],
    "rulerSubColor": colors["blue"],
    "rulerBackColor": colors["middleLightMiddleGrey"],
    "rulerTextColor": colors["black"],

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
        "fontSize" : fontSizes["A10"],
        "fontStyle" : "italic",
    },
    "subTagIntroDate" : {
        "fontWeight" : fontWeights["light"],
        "fontFamily" : fontFamilys["korSans"],
        "fontSize" : fontSizes["A10"]
    },
    "tagContent" : {
        "fontWeight" : fontWeights["regular"],
        "fontFamily" : fontFamilys["engMono"],
        "fontSize" : fontSizes["A11"]
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