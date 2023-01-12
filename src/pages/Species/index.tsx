import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getSpecies } from '../../store/species/speciesSlice';
import Paper from '@mui/material/Paper';

const Species = () => {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.specie); 

    useEffect(() => {
        dispatch(getSpecies());

        console.log(data)
    }, [])

    return (
        <div>
            <h1>ESPECIES</h1>

            {data && data.map((item: any, index: number) => (
                <Paper sx={{p: 2, width: 800, mb: 2}} key={index}>
                    <p>NOME - {item.name}</p>
                    <p>CLASSIFICAÇÃO - {item.classification}</p>
                    <p>DESIGNAÇÃO - {item.designation}</p>
                    <p>ALTURA - {item.average_height}</p>
                    <p>COR DA PELE - {item.skin_colors}</p>
                    <p>COR DO CABELO - {item.hair_colors}</p>
                    <p>COR DOS OLHOS  - {item.eye_colors}</p>
                    <p>TEMPO DE VIDA MÉDIO  - {item.average_lifespan}</p>
                    <p>LINGUA - {item.language}</p>
                    <p>CRIADO - {item.created}</p>
                </Paper>
            ))}
        </div>
    );
};

export default Species;