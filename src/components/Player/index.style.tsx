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

  div.player__controller {
    grid-column: 1/2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
  }

  div.player__infos {
    grid-column: 2/5;
    height: 100%;

    .title {
      height: 30%;
      margin-bottom: 1.2rem;
      display: flex;
      .singer {
        font-weight: 600;
        margin-right: 0.8rem;
      }
    }

    .progress-bar {
      width: 100%;
      height: 10px;
      -webkit-appearance: none;
      outline: none;
      overflow: hidden;
      background-color: white;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 1);
    }

    .progress-bar::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 10px;
      width: 10px;
      cursor: pointer;
      background-color: orangered;
      border: 4px solid orangered;
      box-shadow: -1000px 0 0 1000px orangered;
    }

    .timer {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  div.player__settings {
    grid-column: 5/-1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
  }
`;
