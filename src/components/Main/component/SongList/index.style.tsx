import { styled } from 'styled-components';

export const SongListWrapper = styled.div`
  width: 100%;

  @media (width < 768px) {
    width: 100%;
    margin-trim: block-end;
  }
`;

export const SongListTitle = styled.h3`
  font-size: 2rem;
  padding: 2rem 0;
`;

export const SongListContainer = styled.ul`
  overflow-y: scroll;
`;
