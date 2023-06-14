import React, { useCallback } from 'react';
import { useFetchNetflixOriginals, useFetchTopRated } from '../hooks/';
import Header from '../components/Header';
import Row from '../components/Row';
import Modal from '../components/Modal';
import { type Movie } from '../types';

function Home (): JSX.Element {
  const { netflixOriginals } = useFetchNetflixOriginals();
  const { topRated } = useFetchTopRated();
  const [isModalShown, setIsModalShown] = React.useState(false);
  const [currentMovie, setMovie] = React.useState<Movie | null>(null);
  const handleClick = useCallback((movie: Movie) => {
    setMovie(movie);
    setIsModalShown(true);
  }, []);
  const handleClose = useCallback(() => {
    setMovie(null);
    setIsModalShown(false);
  }, []);
  return (
    <div>
      <Header />
      <div className="mb-10 mt-20">
        <Row
          title="NETFLIX ORIGUINALS"
          movies={netflixOriginals}
          onClick={handleClick}
        />
      </div>
      <div>
        <Row title="Top Reted" movies={topRated} onClick={handleClick} />
      </div>
      <Modal
        title={currentMovie?.name}
        isShown={isModalShown}
        onClose={handleClose}
      >
        <p>{currentMovie?.overview}</p>
      </Modal>
    </div>
  );
}

export default Home;
