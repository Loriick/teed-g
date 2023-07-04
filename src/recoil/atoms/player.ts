import { atom } from 'recoil';

export const isPlayingState = atom({
  key: 'isPlaying',
  default: false,
});

export const isMutedState = atom({
  key: 'isMuted',
  default: false,
});

export const idState = atom<number | undefined>({
  key: 'idState',
  default: undefined,
});

export const songIndex = atom<number>({
  key: 'songIndex',
  default: undefined,
});
