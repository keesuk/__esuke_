import { css } from "styled-components";

const sizes = {
  mobile: [0, 1080],
  deskTop: [1081, null]
}

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media screen and (min-width: ${sizes[label][0]}px) and (max-width: ${sizes[label][1]}px) {
            ${css(...args)};
        }
    `
    return acc
}, {})

export const commonMargin = (margin, value) => `
    margin-left: ${margin.marginLeft * value}vw;
    margin-bottom: ${margin.marginBottom * value}vw;
    margin-right: ${margin.marginRight * value}vw;
    margin-top: ${margin.marginTop * value}vw;
`;