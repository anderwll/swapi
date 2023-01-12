import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { apiGET } from '../../services';
import { InitialStateINT, ResponseAPI } from '../typeStore';

const initialState: InitialStateINT = {
    loading: false,
    success: false,
    message: '',
    data: null
};

const getFilms = createAsyncThunk('films/getFilms', async () => {
    const response = await apiGET('/films');
    return response;
});

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // ---------- BUSCA TODOS -------------
    builder.addCase(getFilms.pending, (state, action) => {
        state.loading = true;

    }).addCase(getFilms.fulfilled, (state, action: PayloadAction<ResponseAPI>) => {
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


export const filmsReducer = filmsSlice.reducer;
export { getFilms }
