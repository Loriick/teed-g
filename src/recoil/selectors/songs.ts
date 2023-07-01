import { selector } from 'recoil';
import { createClient } from '@supabase/supabase-js';
import { idState } from '../atoms/player';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const songsQuery = selector({
  key: 'songs',
  get: async () => {
    const { data } = await supabase
      .from('songs')
      .select(`*, singer (name)`);
    return data;
  },
});

export const currentSongQuery = selector({
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
