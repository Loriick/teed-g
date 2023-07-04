import { ReactElement, Suspense } from 'react';
import Vynile, { VynileFallback } from '../Main/component/Vynile';
import Player from '../Player';

export default function PlayerMobile(): ReactElement {
  return (
    <>
      <Suspense fallback={<VynileFallback />}>
        <Vynile />
      </Suspense>

      <Player />
    </>
  );
}
