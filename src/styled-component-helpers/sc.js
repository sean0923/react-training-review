import { css } from 'styled-components';

export const bgColorTransparentDark = (a = 0.1) => `background-color: rgba(51,51,51, ${a})`;

export const flexCenter = () => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};
