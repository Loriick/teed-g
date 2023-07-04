import { ReactElement } from 'react';
import {
  FaStepBackward,
  FaPlay,
  FaStepForward,
  FaChromecast,
  FaVolumeUp,
} from 'react-icons/fa';
import {
  PlayerControls,
  PlayerInfos,
  PlayerProgressBar,
  PlayerSingerName,
  PlayerTimerContainer,
  PlayerTitleContainer,
  PlayerWrapper,
} from './index.style';
import { formatTime } from '../../helpers/formatTime';

export function PlayerFallBack(): ReactElement {
  return (
    <PlayerWrapper>
      <PlayerControls>
        <span className="hover-button">
          <FaStepBackward />
          <span className="button-overlay"></span>
        </span>
        <span className="hover-button">
          <FaPlay />
          <span className="button-overlay"></span>
        </span>
        <span className="hover-button">
          <FaStepForward />
          <span className="button-overlay"></span>
        </span>
      </PlayerControls>
      <PlayerInfos>
        <PlayerTitleContainer>
          <PlayerSingerName></PlayerSingerName>
          <p className="song"></p>
        </PlayerTitleContainer>
        <PlayerProgressBar type="range" max={0} min={0} />
        <PlayerTimerContainer>
          <span>{formatTime(0)}</span>
          <span>{formatTime(0)}</span>
        </PlayerTimerContainer>
      </PlayerInfos>
      <div className="player__settings">
        <span className="hover-button">
          <FaChromecast />
          <span className="button-overlay"></span>
        </span>
        <span className="hover-button">
          <FaVolumeUp />
          <span className="button-overlay"></span>
        </span>
      </div>
    </PlayerWrapper>
  );
}
