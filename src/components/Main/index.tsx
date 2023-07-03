import { ReactElement, Suspense } from 'react';
import { MainWrapper } from './index.style';
import ArtistPresentation from './component/ArtistPresentation';
import SongList from './component/SongList';
import Vynile, { VynileFallback } from './component/Vynile';
import { SongListFallBack } from './component/SongList/index.fallback';

export default function Main(): ReactElement {
  return (
    <MainWrapper>
      <ArtistPresentation />
      <Suspense fallback={<VynileFallback />}>
        <Vynile />
      </Suspense>
      <div className="media-container">
        <Suspense fallback={<SongListFallBack />}>
          <SongList />
        </Suspense>
      </div>
    </MainWrapper>
  );
}
