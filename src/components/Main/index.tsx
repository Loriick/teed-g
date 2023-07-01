import { ReactElement, Suspense } from 'react';
import { MainWrapper } from './index.style';
import ArtistPresentation from './component/ArtistPresentation';
import SongList, { SongListFallBack } from './component/SongList';
import Video from './component/Video';
import Vynile, { VynileFallback } from './component/Vynile';

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
        {/* <Video /> */}
      </div>
    </MainWrapper>
  );
}
