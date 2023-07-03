import { ReactElement } from 'react';
import {
  FaStepBackward,
  FaPlay,
  FaStepForward,
  FaChromecast,
  FaVolumeUp,
} from 'react-icons/fa';
import { PlayerWrapper } from './index.style';
import { formatTime } from '../../helpers/formatTime';

export function PlayerFallBack(): ReactElement {
  return (
    <PlayerWrapper>
      <div className="player__controller">
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
      </div>
      <div className="player__infos">
        <div className="title">
          <p className="singer"></p>
          <p className="song"></p>
        </div>
        <input type="range" className="progress-bar" />
        <div className="timer">
          <span>{formatTime(0)}</span>
          <span>{formatTime(0)}</span>
        </div>
      </div>
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
