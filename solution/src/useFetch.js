import { useEffect, useState } from "react";

export default function useFetch(url, param = "") {
  const [movies, setMovies] = useState({
    data: [],
    error: "",
    isPending: true,
    filtered: [],
  });

  useEffect(() => {
    fetch(`${url}&${param}`)
      .then((res) => res.json())
      .then((json) =>
        setMovies(
          (prev) =>
            (prev = {
              ...prev,
              data: json,
              isPending: false,
              filtered: json,
            })
        )
      )
      .catch((error) =>
        setMovies(
          (prev) =>
            (prev = {
              ...prev,
              error: error,
            })
        )
      );
  }, [url, param]);
  return [movies, setMovies];
}
