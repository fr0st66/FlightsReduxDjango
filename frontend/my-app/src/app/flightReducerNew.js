// import {  createAsyncThunk,createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
 
// const initialState = {
//     myFlights: []  
// };
 
// export const getFlight = createAsyncThunk(
//     'flights1',
//     async () => {
//       let response= await axios('http://localhost:3000/api/flight')
//       console.log(response.data)
//       return response.data;
//     }
//   );
 
// export const flightSlice = createSlice({
//     name: 'flight',
//     initialState,
//     reducers: {
//         extraReducers: (builder) => {
//             builder.addCase(getFlight.fulfilled, (state, action) => {
//                 state.value = action.payload;
//               });
//           },
//     }
// });
 
// export const { getdata} = flightSlice.actions;
// export const selectFlights = (state) => state.flight.myFlights;
// export default flightSlice.reducer;
