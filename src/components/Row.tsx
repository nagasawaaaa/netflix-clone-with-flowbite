import React from 'react';
import { Card } from 'flowbite-react';
import { type Movie } from '../types';

interface RowProps {
  title: string
  movies: Movie[]
  onClick?: (movie: Movie) => void
}

const baseUrl = 'https://image.tmdb.org/t/p/original';

function Row (props: RowProps): JSX.Element {
  const hasBackdropPath = (movie: Movie): boolean =>
    Boolean(movie.backdrop_path);
  const dummyPath =
    'https://placehold.jp/24px/878787/ffffff/318x179.png?text=NO%20IMAGE';
  return (
    <div className="Row">
      <h2 className="text-2xl mb-2">{props.title}</h2>
      <div className="flex w-full flex-wrap gap-4">
        {props.movies.map((movie) => (
          <Card
            className="md:w-80 w-full object-contain"
            key={movie.id}
            imgSrc={
              hasBackdropPath(movie)
                ? `${baseUrl}${movie.backdrop_path}`
                : dummyPath
            }
            imgAlt={movie.name}
          >
            <h3 className="font-bold whitespace-pre-wrap">{movie.name}</h3>
            {props.onClick != null
              ? (
              <button
                className="mt-2 bg-gray-900 text-white rounded-md px-4 py-2"
                type="button"
                onClick={() => {
                  props.onClick?.(movie);
                }}
              >
                Show Movie Detail
              </button>
                )
              : null}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Row;
