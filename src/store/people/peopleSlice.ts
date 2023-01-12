import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { apiGET } from '../../services';
import { InitialStateINT, ResponseAPI } from '../typeStore';

const initialState: InitialStateINT = {
    loading: false,
    success: false,
    message: '',
    data: null
};

const getPeoples = createAsyncThunk('people/getPeoples', async () => {
    const response = await apiGET('/people');
    return response;
});

const getPeopleId = createAsyncThunk('people/getPeopleId', async (id: number) => {
    const response = await apiGET(`/people/${id}`);
    return response;
});

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // ---------- BUSCA TODOS -------------
    builder.addCase(getPeoples.pending, (state, action) => {
        state.loading = true;

    }).addCase(getPeoples.fulfilled, (state, action: PayloadAction<ResponseAPI>) => {
        state.loading = false;
        state.success = action.payload.success;
        state.message = action.payload.message;
        
        if(action.payload.success) {
            state.data = action.payload.data
        }
    });

    // ---------- BUSCA POR ID -------------
    builder.addCase(getPeopleId.pending, (state, action) => {
        state.loading = true;

    }).addCase(getPeopleId.fulfilled, (state, action: PayloadAction<ResponseAPI>) => {
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


export const peopleReducer = peopleSlice.reducer;
export { getPeoples, getPeopleId }
