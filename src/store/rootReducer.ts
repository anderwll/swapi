import { combineReducers } from 'redux';

import { peopleReducer } from './people/peopleSlice';
import { planetsReducer } from './planets/planetsSlice';
import { filmsReducer } from './films/filmsSlice';
import { speciesReducer } from './species/speciesSlice';
import { vehiclesReducer } from './vehicles/vehiclesSlice';
import { starShipsReducer } from './startships/startshipsSlice';

const rootReducer = combineReducers({
  people: peopleReducer,
  planet: planetsReducer,
  film: filmsReducer,
  specie: speciesReducer,
  vehicle: vehiclesReducer,
  starship: starShipsReducer
});

export { rootReducer };