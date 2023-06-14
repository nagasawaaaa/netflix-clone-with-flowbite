import { useState, useEffect } from 'react';
import { request } from '../api/request';
import axios from '../api/axios';
import { type BaseResponse, type Movie } from '../types';

export const useFetchTopRated = (): {
  topRated: Movie[]
  isLoading: boolean
} => {
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(true);
      const { data } = await axios.get<BaseResponse<Movie[]>>(
        request.fetchTopRated
      );
      setTopRated(data.results);
      setIsLoading(false);
    };
    fetchData().catch((error) => {
      console.error(error);
      setIsLoading(false);
    });
  }, []);

  return { topRated, isLoading };
};
