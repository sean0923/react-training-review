import { css } from 'styled-components';

export const LESS_THAN_DESKTOP = 'LESS_THAN_DESKTOP';
export const LESS_THAN_TABLET = 'LESS_THAN_TABLET';
export const LESS_THAN_PHONE = 'LESS_THAN_PHONE';

const sizes = {
  [LESS_THAN_DESKTOP]: 992,
  [LESS_THAN_TABLET]: 768,
  [LESS_THAN_PHONE]: 576,
};

// Iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
