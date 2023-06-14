import { useState, useEffect } from 'react';
import { request } from '../api/request';
import axios from '../api/axios';
import { type BaseResponse, type Movie } from '../types';

export const useFetchNetflixOriginals = (): {
  netflixOriginals: Movie[]
  isLoading: boolean
} => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(true);
      const { data } = await axios.get<BaseResponse<Movie[]>>(
        request.fetchNetflixOriginals
      );
      setMovies(data.results);
      setIsLoading(false);
    };
    fetchData().catch((error) => {
      console.error(error);
      setIsLoading(false);
    });
  }, []);

  return { netflixOriginals: movies, isLoading };
};
