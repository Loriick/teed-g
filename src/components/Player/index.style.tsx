import { styled } from 'styled-components';

export const PlayerWrapper = styled.div`
  grid-area: player;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-top: 1px solid #fff;
  > div {
    height: 100%;
  }

  audio {
    display: none;
  }

  @media (width < 768px) {
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const PlayerControls = styled.div`
  grid-column: 1/2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: #fff;

  @media (width < 768px) {
    .previous-track,
    .next-track {
      display: none;
    }
  }
`;

export const PlayerInfos = styled.div`
  grid-column: 2/5;
  height: 100%;
`;

export const PlayerTitleContainer = styled.div`
  height: 30%;
  margin-bottom: 1.2rem;
  display: flex;

  @media (width < 768px) {
    height: 100%;
    flex-direction: column-reverse;
    justify-content: center;

    .song {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
`;

export const PlayerSingerName = styled.p`
  font-weight: 600;
  margin-right: 0.8rem;

  @media (width < 768px) {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

export const PlayerProgressBar = styled.input`
  width: 100%;
  height: 10px;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  overflow: hidden;
  background-color: white;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 1);

  @media (width < 768px) {
    display: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 10px;
    width: 10px;
    cursor: pointer;
    background-color: orangered;
    border: 4px solid orangered;
    box-shadow: -1000px 0 0 1000px orangered;
  }
`;

export const PlayerTimerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (width < 768px) {
    display: none;
  }
`;

export const PlayerSettingContainer = styled.div`
  grid-column: 5/-1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;

  @media (width > 768px) {
    .next-track {
      display: none;
    }
  }

  @media (width < 768px) {
    .mute,
    .cast,
    .repeat {
      display: none;
    }
  }
`;
