import { styled } from 'styled-components';

export const SongItemWrapper = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  overflow: hidden;

  height: 50px;
  border-radius: 0;
  margin-bottom: 1.4rem;
  @media only screen and (min-width: 768px) {
    transition: background-color 0.3s ease-in;
    cursor: pointer;
    border-radius: 0.8rem;
    height: 50px;

    &:hover {
      background-color: rgba(198, 210, 209, 0.5);
    }
  }
`;

export const CoverContainer = styled.div`
  width: 5%;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  @media only screen and (max-width: 768px) {
    height: 100%;
    width: 50px;
    margin-right: 3rem;
    padding: 0;
  }
`;

export const Cover = styled.img<{
  isCurrentSongPlaying: boolean;
}>`
  width: 40px;
  height: 40px;
  transition: border-radius 0.4s ease-in;
  border-radius: ${(props) =>
    props.isCurrentSongPlaying ? '50%' : 'unset'};

  animation: ${(props) =>
    props.isCurrentSongPlaying && 'animateCover infinite linear 10s'};

  animation-play-state: ${({ isCurrentSongPlaying }) =>
    isCurrentSongPlaying ? 'running' : 'paused'};

  @media only screen and (max-width: 768px) {
    width: 80px;
    height: 100%;
    animation: unset;
    height: 100%;
    border-radius: 0;
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

export const SongTitleContainer = styled.div`
  flex-grow: 1;
  font-size: 1.4rem;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: 90%;
  }
`;

export const ButtonContainer = styled.div`
  width: 5%;
  font-size: 1.6rem;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
