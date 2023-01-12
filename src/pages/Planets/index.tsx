import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPlanets } from '../../store/planets/planetsSlice';
import Paper from '@mui/material/Paper';

const Planets = () => {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.planet); 

    useEffect(() => {
        dispatch(getPlanets());

        console.log(data)
    }, [])

    return (
        <div>
            <h1>PLANETAS</h1>

            {data && data.map((item: any, index: number) => (
                <Paper sx={{p: 2, width: 400, mb: 2}} key={index}>
                    <p>NOME - {item.name}</p>
                    <p>ROTAÇÃO - {item.rotation_period}</p>
                    <p>ORBITA - {item.orbital_period}</p>
                    <p>DIAMETRO - {item.diameter}</p>
                    <p>CLIMA - {item.climate}</p>
                    <p>GRAVIDADE - {item.gravity}</p>
                    <p>TERRENO - {item.terrain}</p>
                    <p>AGUA DA SUPERFICIE - {item.surface_water}</p>
                    <p>POPULAÇÃO - {item.population}</p>
                </Paper>
            ))}
        </div>
    );
};

export default Planets;