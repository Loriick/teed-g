import { ReactElement } from 'react';
import { VideoWrapper } from './index.style';
import VideoSrc from '../../../../assets/video.mp4';

export default function Video(): ReactElement {
  return (
    <VideoWrapper>
      <h3>Latest video</h3>
      <video src={VideoSrc} />
    </VideoWrapper>
  );
}
