import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { apiGET } from '../../services';
import { InitialStateINT, ResponseAPI } from '../typeStore';

const initialState: InitialStateINT = {
    loading: false,
    success: false,
    message: '',
    data: null
};

const getPlanets = createAsyncThunk('planets/getPlanets', async () => {
    const response = await apiGET('/planets');
    return response;
});

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // ---------- BUSCA TODOS -------------
    builder.addCase(getPlanets.pending, (state, action) => {
        state.loading = true;

    }).addCase(getPlanets.fulfilled, (state, action: PayloadAction<ResponseAPI>) => {
        state.loading = false;
        state.success = action.payload.success;
        state.message = action.payload.message;
        
        if(action.payload.success) {
            state.data = action.payload.data
        }
    });

  }
  },
);


export const planetsReducer = planetsSlice.reducer;
export { getPlanets }
