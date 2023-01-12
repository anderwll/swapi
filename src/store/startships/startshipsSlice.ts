import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { apiGET } from '../../services';
import { InitialStateINT, ResponseAPI } from '../typeStore';

const initialState: InitialStateINT = {
    loading: false,
    success: false,
    message: '',
    data: null
};

const getStarShips = createAsyncThunk('starShips/getStarShips', async () => {
    const response = await apiGET('/starships');
    return response;
});

const starShipsSlice = createSlice({
  name: 'starShips',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // ---------- BUSCA TODOS -------------
    builder.addCase(getStarShips.pending, (state, action) => {
        state.loading = true;

    }).addCase(getStarShips.fulfilled, (state, action: PayloadAction<ResponseAPI>) => {
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


export const starShipsReducer = starShipsSlice.reducer;
export { getStarShips }
