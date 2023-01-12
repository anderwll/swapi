import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPeoples } from '../../store/people/peopleSlice';

const Peoples = () => {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.people); 

    useEffect(() => {
        dispatch(getPeoples());

        console.log(data)
    }, [])

    return (
        <div>
            <h1>Peoples</h1>

            {data && data.map((p: any, index: number) => (
                <Box key={index}>
                    <p>NOME: {p.name}</p>
                    <p>ALTURA: {p.height}</p>
                    <p>MASSA: {p.mass}</p>
                </Box>
            ))}
        </div>
    );
};

export default Peoples;