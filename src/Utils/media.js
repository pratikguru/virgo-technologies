import { css } from "styled-components";

const sizes = {
  enlarged: 1121,
  desktop: 1025,
  tablet: 769,
  phone: 550,
  android: 365
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});




export const mediaType = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = window.matchMedia(`(max-width: ${sizes[label]}px)`).matches;
  return acc;
}, {});
