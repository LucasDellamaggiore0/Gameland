import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const GET_GAMES = createAsyncThunk(
    'GET_GAMES', async () =>{
        const response = await axios.get(`http://localhost:3001/`);
        return await response.data;
    }
)

export const LOG_IN = createAsyncThunk(
    'LOG_IN', async (user) =>{
        try {
            const response = await axios.post(`http://localhost:3001/auth/signin`, user);
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
