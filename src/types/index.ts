export interface BaseResponse<T> {
  page: number
  results: T
  total_pages: number
  total_results: number
}

export interface Movie {
  backdrop_path: string
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
}

export interface Video {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  official: boolean
  published_at: Date
  site: string
  size: number
  type: string
}

export interface VideoResponse {
  id: number
  results: Video[]
}
