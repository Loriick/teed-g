import { ReactElement } from 'react';
import { SongListWrapper } from './index.style';

export function SongListFallBack(): ReactElement {
  return (
    <SongListWrapper>
      <h3>Songs</h3>
      <ul>
        <li>No songs uploaded</li>
      </ul>
    </SongListWrapper>
  );
}
