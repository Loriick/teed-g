import {
  ReactElement,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
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

import {
  isMutedState,
  isPlayingState,
  idState,
  songIndex,
} from '../../recoil/atoms/player';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  currentSongQuery,
  songsQuery,
} from '../../recoil/selectors/songs';

const formatTime = (time: number | undefined): string => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return '00:00';
};
export default function Player(): ReactElement {
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [isMuted, setisMuted] = useRecoilState(isMutedState);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = useRecoilValue(currentSongQuery);
  const songs = useRecoilValue(songsQuery);
  const [currentSongIndex, setSongIndex] = useRecoilState(songIndex);
  const [currentSongId, setCurrentSongId] = useRecoilState(idState);

  useEffect(() => {
    if (currentSong && isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, audioRef, currentSong]);

  const handleSetPlayOrPause = (): void => {
    if (currentSong) {
      setIsPlaying((prev) => !prev);
      isPlaying
        ? audioRef.current?.play()
        : audioRef.current?.pause();
    }
  };

  const handleMute = (): void => {
    if (currentSong) {
      if (audioRef.current) {
        audioRef.current.muted = !isMuted;
      }
      setisMuted((prev) => !prev);
    }
  };

  const handleTimeUpdate = (e: SyntheticEvent<EventTarget>): void => {
    const current = (e.target as HTMLMediaElement).currentTime;
    const durationSong = (e.target as HTMLMediaElement).duration;

    // TODO: gerer le passage a prochain morceau si current === duration

    setCurrentTime(current);
    setDuration(durationSong);
  };

  const handleChangeNextTrack = () => {
    if (songs) {
      if (currentSongIndex + 1 >= songs.length) {
        setSongIndex(0);
        setCurrentSongId(songs[0].id);
      } else {
        setSongIndex(currentSongIndex + 1);
        setCurrentSongId(songs[currentSongIndex + 1].id);
      }
    }
  };

  const handleChangePreviousTrack = () => {
    if (songs) {
      if (currentSongIndex - 1 < 0) {
        setSongIndex(songs.length - 1);
        setCurrentSongId(songs[songs.length - 1].id);
      } else {
        setSongIndex(currentSongIndex - 1);
        setCurrentSongId(songs[currentSongIndex - 1].id);
      }
    }
  };

  const handleDragTime = (e: SyntheticEvent<EventTarget>): void => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseInt(
        (e.target as HTMLInputElement).value
      );
    }

    setCurrentTime(parseInt((e.target as HTMLInputElement).value));
  };

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
          <p className="singer">{currentSong?.singer.name}</p>
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
