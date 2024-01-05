import axios from "axios";
import urls, { API_KEY } from "./urls";


export const fetchMovies = async (url) => {
    try {
        const resp = await axios.get(url, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        });
        return resp.data;
    } catch (error) {
        throw error;
    }
}

export const fetchMovieConifguration = async () => {
    try {
        const resp = await axios.get(urls.configuration, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        });
        return resp.data;
    } catch (error) {
        throw error;
    }
}