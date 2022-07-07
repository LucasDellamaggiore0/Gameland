import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
const {REACT_APP_API} = process.env;

export const GET_GAMES = createAsyncThunk(
    'GET_GAMES', async () =>{
        const response = await axios.get(REACT_APP_API);
        return await response.data;
    }
)

export const GET_GENRES = createAsyncThunk(
    'GET_GENRES', async () =>{
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
    'GET_PLATFORMS', async () =>{
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
    'LOG_IN', async (user) =>{
        try {
            const response = await axios.post(REACT_APP_API+`auth/signin`, user);
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
    'CREATE_USER', async (user) =>{
        try {
            const response = await axios.post(REACT_APP_API+`users`, user);
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
    'ADD_GAME', async (values) =>{
        try {
            const response = await axios.post(REACT_APP_API, values);
            return response;
        } catch (error) {
            return {
                ok: false,
                msg: 'Error al agregar el juego'
            }
        }
    }
)