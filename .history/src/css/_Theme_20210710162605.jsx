import raw from "./_Raw.jsx"

const colors = raw.colors, 
    fontSizes = raw.fontSizes,
    fontFamilys = raw.fontFamilys,
    fontWeights = raw.fontWeights


const colorObjs = {

    "mainLayoutBackColor" : colors["white"],

    "mark": colors["yellowGreen"],

    "homeButtonColor" : colors["black"],
    "homeButtonHover": "linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)",

    "cellEmptyBackColor" : colors["middleLightDeepGrey"],
    "cellEmptyTextColor" : colors["deepSkyblue"],

    "instagramColor": colors["instagram"],
    "githubColor": colors["github"],

//----------------서브------------------
    "subLayoutBackColor" : colors["middleLightGrey"],

    "subTagBackColor" : colors["lightGrey"],
    "subStickerBackColor" : "rgba(250, 250, 250, .55)",
    
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
    }
}

const lines = {
    "mainLayoutLine": `.2rem solid ${colors["black"]}`,
    
    
    "subTagLineBold": `.22rem solid ${colors["orangeRed"]}`,
    "subTagLineLight": `.1rem solid ${colors["orangeRed"]}`,

    "subMenuAboutMeLine": `.15rem solid ${colorObjs["subMenuAboutMeDeepColor"]}`,
    "subMenuContactLine": `.15rem solid ${colorObjs["subMenuContactDeepColor"]}`,

    "cellEmptyLine": `.11rem solid ${colors["lightSkyblue"]}`,
    "postItContentLine" : ".13rem solid",
    "postItMenuLine" : "2px solid #000000",
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