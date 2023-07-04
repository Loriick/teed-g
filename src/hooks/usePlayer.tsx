import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import {
  idState,
  isMutedState,
  isPlayingState,
  songIndex,
} from '../recoil/atoms/player';
import { RefObject, SyntheticEvent, useState } from 'react';
import { songsQuery } from '../recoil/selectors/songs';
import { ReplayStatus, Song } from '../types';

function usePlayer({
  currentSong,
  audioRef,
}: {
  currentSong: Song;
  audioRef: RefObject<HTMLAudioElement>;
}) {
  const [statusList, setStatusList] = useState<ReplayStatus[]>([
    'off',
    'once',
    'all',
  ]);
  const [isMuted, setisMuted] = useRecoilState(isMutedState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const songs = useRecoilValue(songsQuery);
  const setCurrentSongId = useSetRecoilState(idState);
  const [currentSongIndex, setSongIndex] = useRecoilState(songIndex);
  const replayStatus = statusList[0];

  const handleChangeReplayStatus = () => {
    const statusRemoved = statusList.shift();

    if (statusRemoved) {
      setStatusList((previousStatus) => [
        ...previousStatus,
        statusRemoved,
      ]);
    }
  };

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

    if (
      duration > 0 &&
      Math.floor(currentTime) === Math.floor(duration)
    ) {
      // Replay that songs when it's finish
      if (replayStatus === 'once' && songs) {
        setCurrentTime(0);
        setCurrentSongId(songs[currentSongIndex].id);
        audioRef.current?.play();
      } else {
        handleChangeNextTrack();
        setCurrentTime(0);
      }
    } else {
      setCurrentTime(current);
    }
    setDuration(durationSong);
  };

  const handleDragTime = (e: SyntheticEvent<EventTarget>): void => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseInt(
        (e.target as HTMLInputElement).value
      );
    }

    setCurrentTime(parseInt((e.target as HTMLInputElement).value));
  };

  const handleChangeNextTrack = () => {
    if (songs && audioRef.current) {
      if (currentSongIndex + 1 >= songs.length) {
        if (replayStatus === 'all') {
          setSongIndex(0);
          setCurrentSongId(songs[0].id);
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
          setCurrentTime(0);
          setCurrentSongId(undefined);
        }
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

  return {
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
  };
}

export default usePlayer;
