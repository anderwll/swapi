import React, { useEffect } from 'react';

import { getFilms } from '../../store/films/filmsSlice';
import { useAppDispatch } from '../../store/hooks';
import { getPeoples } from '../../store/people/peopleSlice';
import { getPlanets } from '../../store/planets/planetsSlice';
import { getSpecies } from '../../store/species/speciesSlice';
import { getStarShips } from '../../store/starShips/starShipsSlice';
import { getVehicles } from '../../store/vehicles/vehiclesSlice';

const Initial = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getFilms());
        dispatch(getPeoples());
        dispatch(getPlanets());
        dispatch(getSpecies());
        dispatch(getStarShips());
        dispatch(getVehicles());
    }, [])

    return (
        <div>
            <h1>PAGINA INICIAL </h1>
        </div>
    );
};

export default Initial;