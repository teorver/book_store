import {signInAPI} from "../../../api/authAPI";
import {createAsyncThunk} from "@reduxjs/toolkit";

interface Iparams { email: string; password: string };

export const signIn = createAsyncThunk(
    'auth/signIn',
    async ({email, password}: Iparams) => {
        const responseBody = { email, password };
        const response = await signInAPI(responseBody);

        return response;
    }
);
