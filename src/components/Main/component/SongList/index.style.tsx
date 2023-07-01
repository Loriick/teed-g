import { styled } from 'styled-components';

export const SongListWrapper = styled.div`
  width: 70%;

  @media (width < 768px) {
    width: 100%;
    margin-trim: block-end;
  }
  h3 {
    font-size: 2rem;
  }

  ul {
    overflow-y: scroll;
  }
`;
