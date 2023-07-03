import { ReactElement, useEffect, useRef } from 'react';
import { PlayerWrapper } from './index.style';
import {
  FaPlay,
  FaStepBackward,
  FaStepForward,
  FaPause,
  FaChromecast,
  FaVolumeUp,
  FaVolumeMute,
} from 'react-icons/fa';

import { useRecoilValue } from 'recoil';
import { currentSongQuery } from '../../recoil/selectors/songs';
import { formatTime } from '../../helpers/formatTime';
import usePlayer from '../../hooks/usePlayer';

export default function Player(): ReactElement {
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = useRecoilValue(currentSongQuery);

  const {
    handleMute,
    handleSetPlayOrPause,
    handleDragTime,
    handleTimeUpdate,
    handleChangeNextTrack,
    handleChangePreviousTrack,

    currentTime,
    duration,
    isPlaying,
    isMuted,
  } = usePlayer({ audioRef, currentSong });

  useEffect(() => {
    if (currentSong && isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, audioRef, currentSong]);

  useEffect(() => {
    document.title = currentSong
      ? `${currentSong.singer?.name} - ${currentSong.title}`
      : 'FWI Stream';
  }, [currentSong]);

  return (
    <PlayerWrapper>
      <div className="player__controller">
        <span
          className="hover-button"
          onClick={handleChangePreviousTrack}
        >
          <FaStepBackward />
          <span className="button-overlay"></span>
        </span>
        <span className="hover-button" onClick={handleSetPlayOrPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
          <span className="button-overlay"></span>
        </span>
        <span
          className="hover-button"
          onClick={handleChangeNextTrack}
        >
          <FaStepForward />
          <span className="button-overlay"></span>
        </span>
      </div>
      <div className="player__infos">
        <div className="title">
          <p className="singer">{currentSong?.singer?.name}</p>
          <p className="song">{currentSong?.title}</p>
        </div>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          className="progress-bar"
          onChange={handleDragTime}
        />
        <div className="timer">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <audio
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          ref={audioRef}
          src={currentSong?.song_path}
          controls
        />
      </div>
      <div className="player__settings">
        <span className="hover-button">
          <FaChromecast />
          <span className="button-overlay"></span>
        </span>
        <span className="hover-button" onClick={handleMute}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          <span className="button-overlay"></span>
        </span>
      </div>
    </PlayerWrapper>
  );
}
