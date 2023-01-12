import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getVehicles } from '../../store/vehicles/vehiclesSlice';
import Paper from '@mui/material/Paper';

const Vehicles = () => {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.vehicle); 

    useEffect(() => {
        dispatch(getVehicles());

        console.log(data)
    }, [])

    return (
        <div>
            <h1>VEICULOS</h1>

            {data && data.map((item: any, index: number) => (
                <Paper sx={{p: 2, width: 800, mb: 2}} key={index}>
                    <p>NOME - {item.name}</p>
                    <p>MODELO - {item.model}</p>
                    <p>FABRICANTE - {item.manufacturer}</p>
                    <p>CUSTO EM CRÉDITO - {item.cost_in_credits}</p>
                    <p>TAMANHO - {item.length}</p>
                    <p>SPEED MAX  - {item.max_atmosphering_speed}</p>
                    <p>EQUIPE TÉCNICA  - {item.crew}</p>
                    <p>PASSAGEIROS - {item.passengers}</p>
                    <p>CARGA MAX - {item.cargo_capacity}</p>
                </Paper>
            ))}
        </div>
    )
};

export default Vehicles;