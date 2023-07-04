import { styled } from 'styled-components';

export const MainWrapper = styled.main`
  grid-area: main;
  padding: 4rem 2.4rem;
  max-width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 3rem 1.4rem;
  }
`;

export const MediaContainer = styled.div`
  display: flex;
`;
