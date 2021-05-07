const colors = {
    white: 
        "#FFFFFF",
    lightGrey: 
        "#FAFAFA",
    middleGrey: 
        "#E3E7E3",
    middleDeepGrey:
        "#DEDEDE",
    deepGrey:
        "#B7B7B7",
    lightVanila: 
        "#EAE7E0",
    yellow: 
        "#FFFF2F",
    deepYellow: 
        "#CCAA66",
    orangeRed: 
        "#F72D0D",
    pink: 
        "#FE70B3",
    hotPink: 
        "#E44E99",
    deepPink: 
        "#ee2267",
    purplePinkg: 
        "#D60F85",
    purple: 
        "#D11CD1",
    deepPurple: 
        "#800080",
    darkPurple: 
        "#560D56",
    deepDarkPurple: 
        "#482552",
    lightBlue: 
        "#006CCA",
    blue: 
        "#0000FF",
    deepBlue: 
        "#0303B7",
    lightSkyblue: 
        "#A7EFFF",
    deepSkyblue:
        "#4DC2DC",
    cyan:
        "#21F9F9",
    mint: 
        "#3EB489",
    deepMint:
        "#37BFBF",
    lightGreen:
        "#5DD368",
    green:
        "#029511",
    middleGreen:
        "#007D00",
    darkGreen:
        "#0E572B",
    yellowGreen: 
        "#C9FF2F",
    black:
        "#000000",
}

const colorObj = {
    mark: colors.yellowGreen,
    rainbow: "linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)",

    white55: "rgba(250, 250, 250, .55)",
    cellEmptyBackground: colors.middleDeepGrey,

    instagramColor: "#F58529, #DD2A7B, #8134AF, #515BD4",
    githubColor: "#216e39, #30a14e, #40c463",

    pigeonColor: "#ff677f",
    pigeonSubColor: colors.pink,
    gmfColor: "#219D87",
    gmfSubColor: colors.deepMint,
    rulerColor: "#3B44AC",
    rulerSubColor: colors.blue,
    samsaraColor: "#662583",
    samsaraSubColor: colors.deepPurple,
    onvoyageColor: colors.black,
    onvoyageSubColor: colors.white,
    seoulColor: colors.middleDeepGrey,
    seoulSubColor: colors.black,
}

const lines = {
    mainLayoutLine: `.2rem solid ${colors["black"]}`,
    leftTitleLine: `.025rem dashed ${colors["black"]}`,
    leftTagLine: `.02rem solid ${colors["orangeRed"]}`,
    leftStickerLine: `.01rem solid ${colors["deepGrey"]}`,
    cellLine: `.02rem solid ${colors["lightSkyblue"]}`,
}

const fontSizes = {
    A1 : "2.6rem",
    A2 : "1.5rem",
    A3 : "1.4rem",
    A4 : "1.2rem",
    A5 : "1.1rem",
    A6 : "1rem",
    A7 : "0.9rem",
    A8 : "0.8rem",
    A9 : "0.7rem",
    A10 : "0.6rem",
    A11 : "0.5rem",
}

const fontFamileys = {
    engMono : "'IBM Plex Mono', monospace",
    engSerif : "'Cormorant Garamond', serif",
    korSans : "'Gothic A1', sans-serif ",
    korSerif : "'MaruBuri-Regular', serif",
}

const fontWeight = {
    extraLight : "200",
    light : "300",
    regular : "400",
    medium : "500",
    semiBold : "600",
}

const theme = {
    colors,
    colorObj,
    lines,
    fontSizes, 
    fontFamileys, 
    fontWeight
}

export default theme