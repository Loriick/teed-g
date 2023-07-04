import { ReactElement, Suspense } from 'react';
import { MainWrapper, MediaContainer } from './index.style';
import ArtistPresentation from './component/ArtistPresentation';
import SongList from './component/SongList';
import { SongListFallBack } from './component/SongList/index.fallback';

export default function Main(): ReactElement {
  return (
    <MainWrapper>
      <ArtistPresentation />
      <MediaContainer>
        <Suspense fallback={<SongListFallBack />}>
          <SongList />
        </Suspense>
      </MediaContainer>
    </MainWrapper>
  );
}
