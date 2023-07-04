import { ReactElement } from 'react';
import {
  SongListContainer,
  SongListTitle,
  SongListWrapper,
} from './index.style';

export function SongListFallBack(): ReactElement {
  return (
    <SongListWrapper>
      <SongListTitle>Songs</SongListTitle>
      <SongListContainer>
        <li>No songs uploaded</li>
      </SongListContainer>
    </SongListWrapper>
  );
}
