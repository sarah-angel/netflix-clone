export interface Genre {
  id: number
  name: string
}

export interface Movie {
  title: string
  backdrop_path: string
  media_type?: string
  release_date?: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
  posterUrl: 'https://joy.videvo.net/videvo_files/video/free/2021-05/thumbnails/_Argentina man with dummy in cafe_small.jpg',
  videoUrl:'https://joy.videvo.net/videvo_files/video/free/2021-05/large_watermarked/_Argentina%20man%20with%20dummy%20in%20cafe_preview.mp4'
  //camelCase
}

export interface Element {
  type:
  | 'Bloopers'
  | 'Featurette'
  | 'Behind the Scenes'
  | 'Clip'
  | 'Trailer'
  | 'Teaser'
}