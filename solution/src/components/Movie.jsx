import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import useFetch from "../useFetch";
export default function Movie({ param }) {
  console.log(param);
  const [imdb, setImdb] = useState([]);
  const [movies, setMovies] = useFetch(
    ` http://www.omdbapi.com/?s=${param}&apikey=5b346506`
  );

  useEffect(() => {
    const getData = async (param) => {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?i=${param}&apikey=5b346506`
        );
        const json = await res.json();
        setImdb((prev) => (prev = [json, ...prev]));
      } catch (error) {
        console.log(error);
      }
    };
    if (movies.data.Search !== undefined) {
      movies.data.Search.forEach((el) => {
        getData(el.imdbID);
      });
    }
  }, [movies]);
  console.log();
  return (
    <div className="moviecontainer">
      {imdb.length && imdb.map((el) => <MovieCard data={el} />)}
    </div>
  );
}
