import React, { useEffect } from 'react';
import { getFilms } from '../../store/films/filmsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Paper from '@mui/material/Paper';

const Films = () => {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.film); 

    useEffect(() => {
        dispatch(getFilms());

        console.log(data)
    }, [])

    return (
        <div>
            <h1>FILMES</h1>

            {data && data.map((item: any, index: number) => (
                <Paper sx={{p: 2, width: 800, mb: 2}} key={index}>
                    <p>TITULO - {item.title}</p>
                    <p>RASTREAMENTE DA ABERTURA - {item.opening_crawl}</p>
                    <p>DIRETOR - {item.director}</p>
                    <p>PRODUÇÃO - {item.producer}</p>
                    <p>LANÇAMENTO - {item.release_date}</p>
                </Paper>
            ))}
        </div>
    );
};

export default Films;