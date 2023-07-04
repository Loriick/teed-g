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
`;

export const PlayerControls = styled.div`
  grid-column: 1/2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: #fff;
`;

export const PlayerInfos = styled.div`
  grid-column: 2/5;
  height: 100%;
`;

export const PlayerTitleContainer = styled.div`
  height: 30%;
  margin-bottom: 1.2rem;
  display: flex;
`;

export const PlayerSingerName = styled.p`
  font-weight: 600;
  margin-right: 0.8rem;
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
`;

export const PlayerSettingContainer = styled.div`
  grid-column: 5/-1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`;
