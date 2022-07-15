import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API, REACT_APP_CLOUDINARY } = process.env;

export const GET_GAMES = createAsyncThunk(
    'GET_GAMES', async () => {
        const response = await axios.get(REACT_APP_API);
        return await response.data;
    }
)

export const SEARCH_GAMES_BY_NAME = createAsyncThunk(
    'SEARCH_GAMES_BY_NAME', async (name) => {
        try {
            const response = await axios.get(`${REACT_APP_API}?name=${name}`);
            console.log(response.data);
            return await response.data;
        } catch (error) {
            return error;
        }
    }
)

export const GET_GENRES = createAsyncThunk(
    'GET_GENRES', async () => {
        try {
            const response = await axios.get(`${REACT_APP_API}genres`);
            return await response.data;
        } catch (error) {
            return {
                ok: false,
                msg: 'Error al obtener los géneros'
            }
        }
    }
)

export const GET_PLATFORMS = createAsyncThunk(
    'GET_PLATFORMS', async () => {
        try {
            const response = await axios.get(`${REACT_APP_API}platforms`);
            return await response.data;
        } catch (error) {
            return {
                ok: false,
                msg: 'Error al obtener las plataformas'
            }
        }
    }
)

export const LOG_IN = createAsyncThunk(
    'LOG_IN', async (user) => {
        try {
            const response = await axios.post(REACT_APP_API + `auth/signin`, user);
            localStorage.setItem('token', response.data.token);
            return await response.data;
        } catch (error) {
            return {
                ok: false,
                msg: error.response.data.msg
            }
        }
    }
)

export const CREATE_USER = createAsyncThunk(
    'CREATE_USER', async (user) => {
        try {
            const response = await axios.post(REACT_APP_API + `users`, user);
            return await response.data;
        } catch (error) {
            return {
                ok: false,
                msg: error.response.data.errors.email.msg
            }
        }
    }
)

export const ADD_GAME = createAsyncThunk(
    'ADD_GAME', async (values) => {
        try {
            let img = values.img;
            const formData = new FormData();
            formData.append('file', img);
            formData.append('upload_preset', 'nipitgqm');
            await axios.post(`${REACT_APP_CLOUDINARY}`, formData).then(response => {
                img = [{
                    url: response.data.url,
                    alt: values.name,
                }]
                values.img = img;
            });
            

            const response = await axios.post(REACT_APP_API, values);
            return {
                ok: true,
                msg: 'Juego agregado',
                game: response.data
            }
        } catch (error) {
            return {
                ok: false,
                msg: `${error}`
            }
        }
    }
)

export const FILTER_GAMES_BY_GENRE = createAsyncThunk(
    'FILTER_GAMES_BY_GENRE', async (genre) => {
        try {
            const response = await axios.get(`${REACT_APP_API}?genres=${genre}`);
            return await response.data;
        } catch (error) {
            return {
                ok: false,
                msg: 'Error al obtener los juegos'
            }
        }
    }
) 

export const FILTER_GAMES_BY_PLATFORMS = createAsyncThunk(
    'FILTER_GAMES_BY_PLATFORMS', async (platform) => {
        try {
            const response = await axios.get(`${REACT_APP_API}?platform=${platform}`);
            return await response.data;
        } catch (error) {
            return {
                ok: false,
                msg: 'Error al obtener los juegos'
            }
        }
    }
)

export const ORDER_GAMES = createAction('ORDER_GAMES', (gamesOrder) => {
    return {
        payload: gamesOrder
    }
});