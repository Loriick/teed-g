export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      singer: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string | null
          thumbail_path: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id: string
          name?: string | null
          thumbail_path?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string | null
          thumbail_path?: string | null
        }
        Relationships: []
      }
      songs: {
        Row: {
          cover_path: string | null
          created_at: string | null
          id: number
          singer: string | null
          song_path: string | null
          title: string | null
        }
        Insert: {
          cover_path?: string | null
          created_at?: string | null
          id?: number
          singer?: string | null
          song_path?: string | null
          title?: string | null
        }
        Update: {
          cover_path?: string | null
          created_at?: string | null
          id?: number
          singer?: string | null
          song_path?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "songs_singer_fkey"
            columns: ["singer"]
            referencedRelation: "singer"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
