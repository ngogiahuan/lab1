import { useState, useEffect } from "react";

const base_url = "https://api.themoviedb.org/3/movie";
const search_url = "https://api.themoviedb.org/3/search/movie";
const trending_url =
  "https://api.themoviedb.org/3/trending/movie/week?language=en-US";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGU0NThmNDNhYzRkOTRkOTVkYTcwZWIwZGVhNGIzZSIsInN1YiI6IjY1MjZjMmRiMWYzZTYwMDExYzQ4MzQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v7u5-gnO9ImTprIBOc6zgxw1CzBNph69EiW9sr7uMwk",
  },
};

const useFilmsData = (page, category, searchQuery = null) => {
  const [filmsData, setFilmsData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  // const url = `${base_url}/${category}?language=en-US&page=${page}`;
  let url;
  if (searchQuery) {
    url = `${search_url}?language=en-US&page=${page}&query=${searchQuery}`;
  } else {
    if (category === "trending") {
      url = trending_url;
    } else {
      url = `${base_url}/${category}?language=en-US&page=${page}`;
    }
  }

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setFilmsData(data.results);
        setTotalPage(data.total_pages);
        // console.log(data.results);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [page, category, searchQuery]);

  return { filmsData, totalPage };
};

const useFilmDetail = (filmID) => {
  const [filmDetails, setFilmDetails] = useState([]);

  const url = `${base_url}/${filmID}`;

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setFilmDetails(data);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filmID]);

  return { filmDetails };
};

const useFilmTrailer = (filmID) => {
  const [filmTrailer, setFilmTrailer] = useState([]);

  const url = `${base_url}/${filmID}/videos`;

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        const officialTrailer = data.results.find(
          (result) => result.name === "Official Trailer"
        );
        if (officialTrailer) {
          setFilmTrailer(officialTrailer.key);
        } else {
          setFilmTrailer(data.results[0].key);
        }
      })
      .catch((error) => {
        console.log(error);
        setFilmTrailer(null);
      });
  }, [filmID]);

  return { filmTrailer };
};
export { useFilmsData, useFilmDetail, useFilmTrailer };
