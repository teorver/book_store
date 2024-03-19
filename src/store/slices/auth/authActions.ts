import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store";
import { Action } from "redux";
import * as types from "./authActionsTypes";
import { signInAPI } from "../../../api/authAPI";

export const signInRequest = (): types.SignInRequestAction => ({
    type: types.SIGN_IN_REQUEST,
});

export const signInSuccess = (
    accessToken: string,
    refreshToken: string
): types.SignInSuccessAction => ({
    type: types.SIGN_IN_SUCCESS,
    payload: { accessToken, refreshToken },
});

export const signInFailure = (
    error: string
): types.SignInFailureAction => ({
    type: types.SIGN_IN_FAILURE,
    payload: error,
});

export const signIn = (
    email: string,
    password: string
): ThunkAction<void, RootState, unknown, Action<string>> => {
    return async (dispatch) => {
        dispatch(signInRequest());
        try {
            const { accessToken, refreshToken } = await signInAPI(email, password);
            dispatch(signInSuccess(accessToken, refreshToken));
        } catch (error) {
            dispatch(signInFailure(error.message || "Failed to sign in"));
        }
    };
};
