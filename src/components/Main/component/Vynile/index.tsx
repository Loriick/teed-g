import type { ReactElement } from 'react';
import {
  CoverPlaceholder,
  VynileCover,
  VynileWrapper,
} from './index.style';
import { useRecoilValue } from 'recoil';
import { currentSongQuery } from '../../../../recoil/selectors/songs';
import { isPlayingState } from '../../../../recoil/atoms/player';

export default function Vynile(): ReactElement {
  const currentSong = useRecoilValue(currentSongQuery);
  const isPlaying = useRecoilValue(isPlayingState);

  return (
    <VynileWrapper>
      {!currentSong?.cover_path ? (
        <CoverPlaceholder>No music selected</CoverPlaceholder>
      ) : (
        <VynileCover
          isPlaying={isPlaying}
          src={currentSong.cover_path}
          alt="music cover"
        />
      )}
    </VynileWrapper>
  );
}

export function VynileFallback(): ReactElement {
  return <VynileWrapper />;
}
