import { Suspense, useEffect } from 'react';
import Main from './components/Main';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import { PlayerFallBack } from './components/Player/index.fallback';

function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Sidebar />
      <Main />
      <Suspense fallback={<PlayerFallBack />}>
        <Player />
      </Suspense>
    </>
  );
}

export default App;
