import { createSlice } from "@reduxjs/toolkit";

//createSlice mai kiya cheezay include hoti hn
// Name of action
//initial State
//reducer

const initialState = {
    count : 0
}

export const CounterSlice = createSlice({
    //ye type ki trha h name..jis mai string value detey hn
    name :  "Counter",
    initialState,
    reducers:{
       increment: (state) => {
           state.count += 1
       },
       decrement: (state) => {
        state.count -= 1
    }
    }
})

//ye increment or decrement ko mai as a action export krahi hu
export const {increment , decrement} = CounterSlice.actions
export default CounterSlice.reducer;