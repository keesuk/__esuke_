import { css } from "styled-components";

const sizes = {
  mobile: [0, 1080],
  deskTop: [1081, null]
}

const commonMargin = (margin, value) => `
    margin-left: ${({marginLeft}) => marginLeft}vw;
    margin-bottom: ${({marginBottom}) => marginBottom}vw;
    margin-right: ${({marginRight}) => marginRight}vw;
    margin-top: ${({marginTop}) => marginTop}vw;
`;

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media screen and (min-width: ${sizes[label][0]}px) and (max-width: ${sizes[label][1]}px) {
            ${css(...args)};
        }
    `
    return acc
}, {})

