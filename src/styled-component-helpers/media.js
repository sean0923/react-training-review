import { css } from 'styled-components';

export const mediaKeys = {
  DESKTOP: 'DESKTOP',
  TABLET: 'TABLET',
  PHONE: 'PHONE',
};

export const sizes = {
  [mediaKeys.DESKTOP]: 992,
  [mediaKeys.TABLET]: 768,
  [mediaKeys.PHONE]: 576,
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
