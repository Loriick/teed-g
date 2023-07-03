import type { ReactElement } from 'react';
import SongItem from '../SongItem';
import { SongListWrapper } from './index.style';
import { songsQuery } from '../../../../recoil/selectors/songs';
import { useRecoilValue } from 'recoil';
import { Songs } from '../../../../types';

export default function SongList(): ReactElement {
  const songs = useRecoilValue(songsQuery);

  return (
    <SongListWrapper>
      <h3>Songs</h3>
      <ul>
        {(songs as Songs[]).map(
          ({ title, cover_path, id }, index) => (
            <SongItem
              key={id}
              id={id}
              index={index}
              title={title}
              cover={cover_path}
            />
          )
        )}
      </ul>
    </SongListWrapper>
  );
}
