// authActions.ts
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store";
import { Action } from "redux";
import * as types from "./authActionsTypes";
import { signInAPI } from "../../../api/authAPI"; // Implement this API function

// Action creator for starting the sign-in process
export const signInRequest = (): types.SignInRequestAction => ({
    type: types.SIGN_IN_REQUEST,
});

// Action creator for successful sign-in
export const signInSuccess = (
    accessToken: string,
    refreshToken: string
): types.SignInSuccessAction => ({
    type: types.SIGN_IN_SUCCESS,
    payload: { accessToken, refreshToken },
});

// Action creator for sign-in failure
export const signInFailure = (
    error: string
): types.SignInFailureAction => ({
    type: types.SIGN_IN_FAILURE,
    payload: error,
});

// Thunk action creator for performing sign-in
export const signIn = (
    email: string,
    password: string
): ThunkAction<void, RootState, unknown, Action<string>> => {
    return async (dispatch) => {
        dispatch(signInRequest());
        try {
            // Call the API function to perform sign-in
            const { accessToken, refreshToken } = await signInAPI(email, password);
            // Dispatch success action with tokens
            dispatch(signInSuccess(accessToken, refreshToken));
        } catch (error) {
            // Dispatch failure action with error message
            dispatch(signInFailure(error.message || "Failed to sign in"));
        }
    };
};
