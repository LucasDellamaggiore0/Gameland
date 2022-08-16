import { createReducer } from "@reduxjs/toolkit";
import { GET_GAMES, LOG_IN, CREATE_USER, ADD_GAME, GET_GENRES, GET_PLATFORMS, SEARCH_GAMES_BY_NAME, FILTER_GAMES_BY_GENRE, FILTER_GAMES_BY_PLATFORMS, ORDER_GAMES, ADD_PLATFORM, ADD_GENRES, GET_GAME_BY_ID, CLEAN_UP_DETAILS, CLEAN_NEW_USER } from "./actions";

const initialState = {
    games: [],
    genres: [],
    platforms: [],
    game: {},
    userResponse : {

    },
    newUserResponse: {

    },
    loading: true,
}


export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(GET_GAMES.fulfilled, (state, action) => {
        state.games = action.payload;
        state.loading = false;
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
    builder.addCase(SEARCH_GAMES_BY_NAME.fulfilled, (state, action) => {
        state.games = action.payload;
    })
    builder.addCase(FILTER_GAMES_BY_GENRE.fulfilled, (state, action) => {
        state.games = action.payload;
    })
    builder.addCase(FILTER_GAMES_BY_PLATFORMS.fulfilled, (state, action) => {
        state.games = [...action.payload];
    })
    builder.addCase(ORDER_GAMES, (state, action) => {
        state.games = action.payload
    })
    builder.addCase(ADD_PLATFORM.fulfilled, (state, action) => {
        state.platforms = action.payload;
    })
    builder.addCase(ADD_GENRES.fulfilled, (state, action) => {
        state.genres = action.payload;
    })
    builder.addCase(GET_GAME_BY_ID.fulfilled, (state, action) => {
        state.game = action.payload;
        state.loading = false;
    })
    builder.addCase(CLEAN_UP_DETAILS, (state, action) => {
        state.game = action.payload;
        state.loading = false;
    })
    builder.addCase(CLEAN_NEW_USER, (state, action) => {
        state.newUserResponse = action.payload;
    })
});