import type { ReactElement } from 'react';
import { VideoWrapper } from './index.style';

export default function Video(): ReactElement {
  return (
    <VideoWrapper>
      <h3>Latest video</h3>
      <video />
    </VideoWrapper>
  );
}
