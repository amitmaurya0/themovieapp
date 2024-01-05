import { useEffect } from "react";
import { useState } from "react";
import { fetchMovies } from "../apis/movie";

export const useFetchMovie = (url) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        fetchMovies(url)
        .then(data => {
            setLoading(false)
            setMovies(data.results);
        }).catch((e) => {
            setLoading(false)
            setError(e)
        })
    }, []);

    return [loading, movies, error]

}