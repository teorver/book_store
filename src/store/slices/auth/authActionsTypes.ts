export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

export interface SignInRequestAction {
    type: typeof SIGN_IN_REQUEST;
}

export interface SignInSuccessAction {
    type: typeof SIGN_IN_SUCCESS;
    payload: {
        accessToken: string;
        refreshToken: string;
    };
}

export interface SignInFailureAction {
    type: typeof SIGN_IN_FAILURE;
    payload: string;
}

export type AuthActionTypes =
    | SignInRequestAction
    | SignInSuccessAction
    | SignInFailureAction;
