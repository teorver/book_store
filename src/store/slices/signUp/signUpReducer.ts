export const UPDATE_SIGNUP_DATA = 'UPDATE_SIGNUP_DATA';

export const updateSignUpData = (data: any) => ({
    type: UPDATE_SIGNUP_DATA,
    payload: data,
});

const initialState = {
    name: '',
    email: '',
    password: '',
};

const signUpReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_SIGNUP_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default signUpReducer;
