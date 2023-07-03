import { selector } from 'recoil';
import { idState } from '../atoms/player';
import { supabase } from '../../helpers/supabase';
import { Song } from '../../types';

export const songsQuery = selector({
  key: 'songs',
  get: async () => {
    const { data } = await supabase
      .from('songs')
      .select(`*, singer (name)`);
    return data;
  },
});

export const currentSongQuery = selector<Song>({
  key: 'currentSong',
  get: async ({ get }) => {
    const currentId = get(idState);
    if (!currentId) return null;
    const { data } = await supabase
      .from('songs')
      .select(`*, singer (name)`)
      .eq('id', currentId)
      .single();

    return data;
  },
});
