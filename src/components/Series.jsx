import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Series = () => {

  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);

  const handlePreviusClick = () => {
    setPage(page - 1);
    window.scroll(0, 0);
  }

  const handleNextClick = () => {
    setPage(page + 1);
    window.scroll(0, 0);
  }

  const convertToStars = (rating) => {
    let stars = '';
    let wholeStars = Math.floor(rating / 2);
    let halfStar = (rating / 2) - wholeStars;
    for (let index = 0; index < wholeStars; index++) {
      stars += '⭐';
    }
    (halfStar > 0) && (stars += '✨')

    return stars;
  };

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.themoviedb.org/3/discover/tv?language=es-ES&page=${page}`
      const options = {
        method: 'GET',
        headers: {
          authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjlmNzA1YjQ3ODRmNTQ3Mzc2ZjJjZDg4Mzg5MTY4NiIsInN1YiI6IjYyNTA1MjFlYTA1NWVmMDA2NTU3NTEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYHK5Rt55pBTHvGjrEGTjAXRVlGOdnDBpqBxhnhrCL4'
        }
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setTv(data.results);
    };
    fetchApi();
  }, [page]);

  return (
    <section className="section section--lg">
      <div className="container m-auto">
        <h2 className="text-center mb-4 font-extrabold text-2xl hover:text-sky-600 transition-all overflow-hidden">Series</h2>
        <div className="movies">
          {tv.map(element => {
            const { id, poster_path, vote_average, original_name } = element;
            return (
              <Link
                key={id}
                to={`/tv/${id}`}
                className="card"
              >
                <img src={'https://image.tmdb.org/t/p/w300' + poster_path} alt={original_name} width={220} height={330} className="card__img" />
                <div className="card__overlay">
                  <h5 className="card__title">{original_name}</h5>
                  <h6 className="card__subtitle">{convertToStars(vote_average)} {vote_average}</h6>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="action">
          {page > 1 && <button onClick={handlePreviusClick} className="action__button">Atrás</button>}
          <button onClick={handleNextClick} className="action__button">Siguiente</button>
        </div>
      </div>
    </section>
  );
}

export default Series;