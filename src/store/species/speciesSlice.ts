import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { apiGET } from '../../services';
import { InitialStateINT, ResponseAPI } from '../typeStore';

const initialState: InitialStateINT = {
    loading: false,
    success: false,
    message: '',
    data: null
};

const getSpecies = createAsyncThunk('species/getSpecies', async () => {
    const response = await apiGET('/species');
    return response;
});

const speciesSlice = createSlice({
  name: 'species',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // ---------- BUSCA TODOS -------------
    builder.addCase(getSpecies.pending, (state, action) => {
        state.loading = true;

    }).addCase(getSpecies.fulfilled, (state, action: PayloadAction<ResponseAPI>) => {
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


export const speciesReducer = speciesSlice.reducer;
export { getSpecies }
