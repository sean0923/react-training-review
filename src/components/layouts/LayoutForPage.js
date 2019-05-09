import React from 'react';
import styled, { css } from 'styled-components';
import media, { mediaKeys } from '../../styled-component-helpers/media';

const LayoutForPage = ({
  title = 'Default Title',
  description = 'default description',
  children,
}) => {
  return (
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <GridWrapper>{[children[0], children[1]]}</GridWrapper>
    </div>
  );
};

export default LayoutForPage;

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 4rem;
`;

const smallerThanTablet = css`
  display: grid;
  grid-template-columns: 1fr;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  ${media[mediaKeys.TABLET](smallerThanTablet)}

  & > div {
    border: 1px solid var(--color-black);
    min-height: 40rem;
  }
`;
