import { styled } from 'styled-components';

export const VynileWrapper = styled.div<{ isPlaying: boolean }>`
  height: 45%;
  width: 100%;
  overflow: hidden;
  display: grid;
  place-items: center;

  .placeholder {
    height: 100%;
    width: 100%;
    background-color: lightgray;
    display: grid;
    place-items: center;
    color: darkgray;
    font-size: 3rem;
  }

  > img {
    width: 30rem;
    height: 30rem;
    object-fit: cover;
    animation: animateCover infinite linear 10s;
    border-radius: 50%;

    animation-play-state: ${({ isPlaying }) =>
      isPlaying ? 'running' : 'paused'};
  }

  @media (width >= 768px) {
    display: none;
  }

  @keyframes animateCover {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
