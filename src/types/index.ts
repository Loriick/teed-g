export interface Song {
  cover_path: string;
  created_at: string;
  id: number;
  song_path: string;
  title: string;
  singer?: {
    name: string;
  };
}
