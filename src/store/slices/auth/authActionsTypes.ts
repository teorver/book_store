export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

// Define the types for action creators
export interface SignInRequestAction {
    type: typeof SIGN_IN_REQUEST;
}

export interface SignInSuccessAction {
    type: typeof SIGN_IN_SUCCESS;
    payload: {
        accessToken: string;
        refreshToken: string;
        // Add any other user-related data you need to store
    };
}

export interface SignInFailureAction {
    type: typeof SIGN_IN_FAILURE;
    payload: string; // Error message
}

export type AuthActionTypes =
    | SignInRequestAction
    | SignInSuccessAction
    | SignInFailureAction;
