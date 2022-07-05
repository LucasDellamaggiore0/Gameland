import { createReducer } from "@reduxjs/toolkit";
import { GET_GAMES, LOG_IN } from "./actions";

const initialState = {
    games: [],
    userResponse : {ok : ''}
}


export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(GET_GAMES.fulfilled, (state, action) => {
        state.games = action.payload;
    })
    builder.addCase(LOG_IN.fulfilled, (state, action) => {
        state.userResponse = {...action.payload};
    })
});