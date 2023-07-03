import { Suspense } from 'react';
import Main from './components/Main';
import Player from './components/Player';
import { PlayerFallBack } from './components/Player/index.fallback';

function App() {
  return (
    <>
      <Main />
      <Suspense fallback={<PlayerFallBack />}>
        <Player />
      </Suspense>
    </>
  );
}

export default App;
