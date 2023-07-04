import { Suspense } from 'react';
import Main from './components/Main';
import Player from './components/Player';
import { PlayerFallBack } from './components/Player/index.fallback';
import { useRecoilValue } from 'recoil';
import { idState, isPlayingState } from './recoil/atoms/player';

function App() {
  const isPlaying = useRecoilValue(isPlayingState);
  const currentSongId = useRecoilValue(idState);
  return (
    <>
      <Main />
      <Suspense fallback={<PlayerFallBack />}>
        {isPlaying || currentSongId ? <Player /> : null}
      </Suspense>
    </>
  );
}

export default App;
