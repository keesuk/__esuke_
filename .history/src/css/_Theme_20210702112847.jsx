import raw from "./_Raw.jsx"

const colors = raw.colors, 
    fontSizes = raw.fontSizes,
    fontFamilys = raw.fontFamilys,
    fontWeights = raw.fontWeights


const colorObjs = {
    "menuAboutMeColor" : colors["yellow"],
    "menuAboutMedeepColor" : colors["deepYellow"],
    "menuContactColor" : colors["pink"],
    "menuContactdeepColor" : colors["deepPink"],

    "subLayoutBackColor" : colors["middleLightGrey"],
    "mainLayoutBackColor" : colors["white"],

    "mark": colors["yellowGreen"],

    "homeButtonColor" : colors["black"],
    "rainbow": "linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)",

    "subTagBackColor" : colors["lightGrey"],
    "subStickerBackColor" : "rgba(250, 250, 250, .55)",

    "cellEmptyBackColor" : colors["middleLightDeepGrey"],
    "cellEmptyTextColor" : colors["deepSkyblue"],

    "instagramColor": colors["instagram"],
    "githubColor": colors["github"],

    "pigeonColor": colors["pigeon"],
    "pigeonSubColor": colors["pink"],
    "gmfColor": colors["gmf"],
    "gmfSubColor": colors["deepMint"],
    "rulerColor": colors["ruler"],
    "rulerSubColor": colors["blue"],
    "samsaraColor": colors["samsara"],
    "samsaraSubColor": colors["deepPurple"],
    "onvoyageColor": colors["black"],
    "onvoyageSubColor": colors["white"],
    "seoulColor": colors["middleDeepGrey"],
    "seoulSubColor": colors["black"],
}

const fontObjs = {
    "mainTitle" : {
        "fontWeight" : fontWeights["medium"],
        "fontFamily" : fontFamilys["engMono"],
        "fontSize" : fontSizes["A1"],
    },
    "linkA" : {
        "fontWeight" : fontWeights["medium"],
        "fontFamily" : fontFamilys["engMono"],
        "fontSize" : fontSizes["A7"],
    },
    "folioListCellEmpty" : {
        "fontWeight" : fontWeights["semiBold"],
        "fontFamily" : fontFamilys["engMono"],
        "fontSize" : fontSizes["A10"],
        "fontStyle" : "italic",
    }
}

const lines = {
    "mainLayoutLine": `.2rem solid ${colors["black"]}`,
    "subTitleLine": `.025rem dashed ${colors["black"]}`,
    "subTagLine": `.02rem solid ${colors["orangeRed"]}`,
    "subStickerLine": `.01rem solid ${colors["deepGrey"]}`,
    "cellEmptyLine": `.1rem solid ${colors["lightSkyblue"]}`,
    "postItContentLine" : ".13rem solid",
    "postItMenuLine" : "2px solid #000000",
}

const layoutRatio = {
    "sub" : "29",
    "main" : "71"
}

const theme = {
    colorObjs,
    fontObjs,
    lines,
    layoutRatio,
}

export default theme;