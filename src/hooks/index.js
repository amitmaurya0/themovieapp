import { useEffect } from "react";
import { useState } from "react";
import { fetchMovies } from "../apis/movie";

export const useFetchMovie = (url) => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [loadingMoreData, setLoadingMoreData] = useState(true);
    const [error, setError] = useState('');
    const [movies, setMovies] = useState([]);

    const onReachEnd = () => {
        setPage(page+1);
    }


    useEffect(() => {
        if(page > 1){
            setLoadingMoreData(true);
        }
        fetchMovies(`${url}&page=${page}`)
        .then(data => {
            setLoading(false)
            setLoadingMoreData(false);
            setMovies([...movies, ...data.results]);
        }).catch((e) => {
            setLoading(false)
            setError(e.message)
            setLoadingMoreData(false);
        })
    }, [page]);

    return [loading, movies, error, loadingMoreData, onReachEnd]

}