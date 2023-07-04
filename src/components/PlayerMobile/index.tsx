import { ReactElement, Suspense } from 'react';
import Vynile, { VynileFallback } from '../Main/component/Vynile';

export default function PlayerMobile(): ReactElement {
  return (
    <Suspense fallback={<VynileFallback />}>
      <Vynile />
    </Suspense>
  );
}
