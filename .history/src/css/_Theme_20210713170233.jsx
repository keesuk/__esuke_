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
}

const lines = {
    "mainLayoutLine": `.2rem solid ${colorObjs["mainLayoutLineColor"]}`,

    "subPageLine" : `.12rem dashed ${colorObjs["subPageLineColor"]}`,
    "subTagLineBold": `.22rem solid ${colorObjs["subTagLineColor"]}`,
    "subTagLineLight": `.1rem solid ${colorObjs["subTagLineColor"]}`,
    "subTagInLineBold": `.13rem solid ${colorObjs["subTagLineColor"]}`,
    "subTagInLineLight": `.1rem solid ${colorObjs["subTagLineLightColor"]}`,
    "subTagStkBackLineDark": `.1rem solid ${colorObjs["subTagStkBackLineDarkColor"]}`,
    "subTagStkBackLineLight": `.1rem solid ${colorObjs["subTagStkBackLineLightColor"]}`,

    "subMenuAboutMeLine": `.12rem solid ${colorObjs["subMenuAboutMeDeepColor"]}`,
    "subMenuContactLine": `.12rem solid ${colorObjs["subMenuContactDeepColor"]}`,

    "cellEmptyLine": `.11rem solid ${colorObjs["cellEmptyLineColor"]}`,
    "postItContentLine" : ".13rem solid",
}

const fontObjs = {
    "mainTitle" : {
        "fontWeight" : fontWeights["medium"],
        "fontFamily" : fontFamilys["engMono"],
        "fontSize" : fontSizes["A1"],
        "mark" : {
            "fontStyle" : "italic",
            "fontWeight" : fontWeights["semiBold"],
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
    }
}

const layoutRatio = {
    "sub" : 29,
    "main" : 71
}

const theme = {
    colorObjs,
    fontObjs,
    lines,
    layoutRatio,
}

export default theme;