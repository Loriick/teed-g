import { styled } from 'styled-components';

export const SongListWrapper = styled.div`
  width: 70%;

  ul {
    overflow-y: scroll;
  }

  @media (width < 768px) {
    width: 100%;
    margin-trim: block-end;
  }
  h3 {
    font-size: 2rem;
  }
`;
