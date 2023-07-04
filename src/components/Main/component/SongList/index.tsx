import type { ReactElement } from 'react';
import SongItem from '../SongItem';
import {
  SongListContainer,
  SongListTitle,
  SongListWrapper,
} from './index.style';
import { songsQuery } from '../../../../recoil/selectors/songs';
import { useRecoilValue } from 'recoil';
import { Song } from '../../../../types';

export default function SongList(): ReactElement {
  const songs = useRecoilValue(songsQuery);

  return (
    <SongListWrapper>
      <SongListTitle>Songs</SongListTitle>
      <SongListContainer>
        {(songs as Song[]).map(({ title, cover_path, id }, index) => (
          <SongItem
            key={id}
            id={id}
            index={index}
            title={title}
            cover={cover_path}
          />
        ))}
      </SongListContainer>
    </SongListWrapper>
  );
}
