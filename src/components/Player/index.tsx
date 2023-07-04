import { ReactElement, useEffect, useRef } from 'react';
import {
  PlayerControls,
  PlayerInfos,
  PlayerProgressBar,
  PlayerSettingContainer,
  PlayerSingerName,
  PlayerTimerContainer,
  PlayerTitleContainer,
  PlayerWrapper,
} from './index.style';
import {
  FaPlay,
  FaStepBackward,
  FaStepForward,
  FaPause,
  FaChromecast,
  FaVolumeUp,
  FaVolumeMute,
} from 'react-icons/fa';

import { TbRepeatOff, TbRepeatOnce, TbRepeat } from 'react-icons/tb';

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
    handleChangeReplayStatus,

    currentTime,
    duration,
    isPlaying,
    isMuted,
    replayStatus,
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
      <PlayerControls>
        <div
          className="hover-button previous-track"
          onClick={handleChangePreviousTrack}
        >
          <FaStepBackward />
          <span className="button-overlay"></span>
        </div>
        <span className="hover-button" onClick={handleSetPlayOrPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
          <span className="button-overlay"></span>
        </span>
        <span
          className="hover-button next-track"
          onClick={handleChangeNextTrack}
        >
          <FaStepForward />
          <span className="button-overlay"></span>
        </span>
      </PlayerControls>
      <PlayerInfos>
        <PlayerTitleContainer>
          <PlayerSingerName>
            {currentSong?.singer?.name}
          </PlayerSingerName>
          <span className="song">{currentSong?.title}</span>
        </PlayerTitleContainer>
        <PlayerProgressBar
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleDragTime}
        />
        <PlayerTimerContainer>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </PlayerTimerContainer>
        <audio
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          ref={audioRef}
          src={currentSong?.song_path}
          controls
        />
      </PlayerInfos>
      <PlayerSettingContainer className="player__settings">
        <span
          className="hover-button repeat"
          onClick={handleChangeReplayStatus}
        >
          {replayStatus === 'once' ? (
            <TbRepeatOnce />
          ) : replayStatus === 'all' ? (
            <TbRepeat />
          ) : (
            <TbRepeatOff />
          )}
          <span className="button-overlay"></span>
        </span>
        <span className="hover-button cast">
          <FaChromecast />
          <span className="button-overlay"></span>
        </span>
        <span className="hover-button mute" onClick={handleMute}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          <span className="button-overlay"></span>
        </span>
        <span
          className="hover-button next-track"
          onClick={handleChangeNextTrack}
        >
          <FaStepForward />
          <span className="button-overlay"></span>
        </span>
      </PlayerSettingContainer>
    </PlayerWrapper>
  );
}
