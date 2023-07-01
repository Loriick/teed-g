import type { ReactElement } from 'react';
import { VynileWrapper } from './index.style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentSongQuery } from '../../../../recoil/selectors/songs';
import { isPlayingState } from '../../../../recoil/atoms/player';

export default function Vynile(): ReactElement {
  const currentSong = useRecoilValue(currentSongQuery);
  const [isPlaying] = useRecoilState(isPlayingState);

  return (
    <VynileWrapper isPlaying={isPlaying}>
      {!currentSong?.cover_path ? (
        <div className="placeholder">No music selected</div>
      ) : (
        <img src={currentSong?.cover_path} alt="music cover" />
      )}
    </VynileWrapper>
  );
}

export function VynileFallback(): ReactElement {
  return <VynileWrapper></VynileWrapper>;
}
