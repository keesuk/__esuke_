import { css } from "styled-components";

const sizes = {
  mobile: [0, 1080],
  deskTop: [1081, null]
}

const commonMargin = (margin, value) => `
    margin-left: ${({marginLeft}) => marginLeft * value}vw;
    margin-bottom: ${({marginBottom}) => marginBottom * value}vw;
    margin-right: ${({marginRight}) => marginRight * value}vw;
    margin-top: ${({marginTop}) => marginTop * value}vw;
`;

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media screen and (min-width: ${sizes[label][0]}px) and (max-width: ${sizes[label][1]}px) {
            ${css(...args)};
        }
    `
    return acc
}, {})

export const mediaQuery = (margin, mediaType) => {
    media.mediaType`
        ${commonMargin(margin)}
    `
}