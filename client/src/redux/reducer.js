import { createReducer } from "@reduxjs/toolkit";
import { GET_GAMES } from "./actions";

const initialState = {
    games: []
}


export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(GET_GAMES.fulfilled, (state, action) => {
        state.games = action.payload;
    })
});