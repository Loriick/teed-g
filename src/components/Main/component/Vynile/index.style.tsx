import { styled } from 'styled-components';

export const VynileWrapper = styled.div`
  height: 45%;
  width: 100%;
  overflow: hidden;
  display: grid;
  place-items: center;

  @media (width >= 768px) {
    display: none;
  }
`;

export const CoverPlaceholder = styled.div`
  height: 100%;
  width: 100%;
  background-color: lightgray;
  display: grid;
  place-items: center;
  color: darkgray;
  font-size: 3rem;
`;

export const VynileCover = styled.img<{ isPlaying: boolean }>`
  width: 30rem;
  height: 30rem;
  object-fit: cover;
  animation: animateCover infinite linear 10s;
  border-radius: 50%;

  animation-play-state: ${({ isPlaying }) =>
    isPlaying ? 'running' : 'paused'};

  @keyframes animateCover {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
