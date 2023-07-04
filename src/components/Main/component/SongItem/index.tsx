import { ReactElement } from 'react';
import {
  ButtonContainer,
  Cover,
  CoverContainer,
  SongItemWrapper,
  SongTitleContainer,
} from './index.style';
import { FaPlay, FaPause } from 'react-icons/fa';
import {
  idState,
  isPlayingState,
  songIndex,
} from '../../../../recoil/atoms/player';
import { useRecoilState, useSetRecoilState } from 'recoil';

interface SongItemProps {
  cover: string;
  title: string;
  index: number;
  id: number;
}

export default function SongItem({
  cover,
  title,
  index,
  id,
}: SongItemProps): ReactElement {
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [currentSongId, setCurrentSongId] = useRecoilState(idState);
  const setsongIndex = useSetRecoilState(songIndex);
  const isCurrentSongId = currentSongId === id;
  const isCurrentSongPlaying = isPlaying && isCurrentSongId;

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
      <CoverContainer>
        <Cover
          src={cover}
          alt="cover"
          isCurrentSongPlaying={isCurrentSongPlaying}
        />
      </CoverContainer>
      <SongTitleContainer>
        <p>
          {index + 1} {title}
        </p>
      </SongTitleContainer>
      <ButtonContainer>
        {isCurrentSongPlaying ? <FaPause /> : <FaPlay />}
      </ButtonContainer>
    </SongItemWrapper>
  );
}
