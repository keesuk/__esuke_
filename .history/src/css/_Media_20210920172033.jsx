import { css } from "styled-components";

const sizes = {
  mobile: [0, 1080],
  desktop: [1081, null]
}

export default Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media screen (min-width: ${sizes[label][0]}px) and (max-width: ${sizes[label][1]}px) {
            ${css(...args)};
        }
    `
    return acc
}, {})
