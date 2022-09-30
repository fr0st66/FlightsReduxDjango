import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const FLIGHT_URL = 'http://127.0.0.1:8000/';

const initialState = []

export const fetchFlight = createAsyncThunk('flight/fetchFlight', async () => {
    const response = await axios.get(FLIGHT_URL);
    return response.data
})

const flightSlice = createSlice({
    name: 'flight',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchFlight.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllFlights = (state) => state.flight;

export const selectUserById = (state, userId) =>
    state.flight.find(user => user.id === userId)

export default flightSlice.reducer