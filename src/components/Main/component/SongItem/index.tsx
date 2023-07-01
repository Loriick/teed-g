import { ReactElement } from 'react';
import { SongItemWrapper } from './index.style';
import { FaPlay, FaPause } from 'react-icons/fa';
import {
  idState,
  isPlayingState,
  songIndex,
} from '../../../../recoil/atoms/player';
import { useRecoilState, useSetRecoilState } from 'recoil';

interface Props {
  cover?: string;
  title?: string;
  index: number;
  id: number;
}

export default function SongItem({
  cover,
  title,
  index,
  id,
}: Props): ReactElement {
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [currentSongId, setCurrentSongId] = useRecoilState(idState);
  const setsongIndex = useSetRecoilState(songIndex);
  const isCurrentSongId = currentSongId === id;
  const isTheActiveSong = isPlaying && isCurrentSongId;

  const handleSetPlayOrPause = (): void => {
    if (isPlaying && currentSongId) {
      isCurrentSongId
        ? setIsPlaying((prev) => !prev)
        : setIsPlaying(true);
    } else {
      setIsPlaying((prev) => !prev);
    }
    setCurrentSongId(id);
    setsongIndex(index);
  };

  return (
    <SongItemWrapper onClick={handleSetPlayOrPause}>
      <div
        className={`cover__container ${
          isTheActiveSong ? 'active' : ''
        }`}
      >
        <img src={cover} alt="cover" />
      </div>
      <div className="title">
        <p>
          {index + 1} {title}
        </p>
      </div>
      <div className="action">
        {isTheActiveSong ? <FaPause /> : <FaPlay />}
      </div>
    </SongItemWrapper>
  );
}
