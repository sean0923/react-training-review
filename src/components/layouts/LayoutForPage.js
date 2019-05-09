import React from 'react';
import styled from 'styled-components';

const LayoutForPage = ({
  title = 'Default Title',
  description = 'default description',
  children,
}) => {
  return (
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <GridWrapper>{children}</GridWrapper>
    </div>
  );
};

export default LayoutForPage;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 4rem;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 2rem;

  & > div {
    border: 1px solid var(--color-black);
  }
`;
