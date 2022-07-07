import { createReducer } from "@reduxjs/toolkit";
import { GET_GAMES, LOG_IN, CREATE_USER, ADD_GAME, GET_GENRES, GET_PLATFORMS } from "./actions";

const initialState = {
    games: [],
    genres: [],
    platforms: [],
    game: {},
    userResponse : {ok : ''},
    newUserResponse: {ok: ''}
}


export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(GET_GAMES.fulfilled, (state, action) => {
        state.games = action.payload;
    })
    builder.addCase(LOG_IN.fulfilled, (state, action) => {
        state.userResponse = {...action.payload};
    })
    builder.addCase(CREATE_USER.fulfilled, (state, action) => {
        state.newUserResponse = {...action.payload};
    })
    builder.addCase(ADD_GAME.fulfilled, (state, action) => {
        state.game = action.payload;
    })
    builder.addCase(GET_GENRES.fulfilled, (state, action) => {
        state.genres = action.payload;
    })
    builder.addCase(GET_PLATFORMS.fulfilled, (state, action) => {
        state.platforms = action.payload;
    })
});