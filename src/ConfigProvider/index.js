import React, { useState, useEffect, createContext } from 'react'
import Loading from '../components/Shared/Loading'
import { fetchMovieConifguration } from '../apis/movie';
import Error from '../components/Shared/Error';
export const ConfigContext = createContext(null);

const ConfigProvider = ({ children }) => {
    const [thumbImageBase, setThumbImageBase] = useState('');
    const [originaImageBase, setOriginalImageBase] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        try {
            fetchMovieConifguration()
            .then((data) => {
                setLoading(false);
                const thumbBase = data.images.base_url+data.images.backdrop_sizes[0]+"/"
                setThumbImageBase(thumbBase)
                const originalBase = data.images.base_url+data.images.backdrop_sizes[3]+"/"
                setOriginalImageBase(originalBase)
            }).catch((error) => {
                throw error;
            })
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }, [])


    return (
        <ConfigContext.Provider value={{ thumbImageBase, originaImageBase }}>
            <Error error={error} /> 
            {loading && <Loading />}
            { !loading && error == ''  ? children : null}
        </ConfigContext.Provider>
    )
}

export default ConfigProvider