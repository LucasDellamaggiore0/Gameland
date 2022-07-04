import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
const {REACT_API_URL} = process.env;

export const GET_GAMES = createAsyncThunk(
    'GET_GAMES', async () =>{
        const response = await axios.get("http://localhost:3001/");
        return await response.data;
    }
)