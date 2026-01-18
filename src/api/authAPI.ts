interface SignInResponse {
    accessToken: string;
    refreshToken: string;
}

interface IBody {
    email: string;
    password: string;
}

interface ISignUpBody {
    username: string;
    email: string;
    password: string;
}

interface ISignUpResponse {
    username: string;
    email: string;
    id: number;
}

export const signInAPI = async (body: IBody): Promise<SignInResponse> => {
    try {
        const response = await fetch("https://studapi.teachmeskills.by/auth/jwt/create/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: body.email,
                password: body.password,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to sign in");
        }

        const data = await response.json();
        return {
            accessToken: data.access,
            refreshToken: data.refresh,
        };
    } catch (error: any) {
        throw new Error(error.message || "Failed to sign in");
    }
};

export const signUpAPI = async (body: ISignUpBody): Promise<ISignUpResponse> => {
    try {
        const response = await fetch("https://studapi.teachmeskills.by/auth/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData) || "Failed to sign up");
        }

        return await response.json();
    } catch (error: any) {
        throw new Error(error.message || "Failed to sign up");
    }
};

export const activateAPI = async (uid: string, token: string): Promise<void> => {
    try {
        const response = await fetch("https://studapi.teachmeskills.by/auth/users/activation/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ uid, token }),
        });

        if (!response.ok) {
            throw new Error("Failed to activate account");
        }
    } catch (error: any) {
        throw new Error(error.message || "Failed to activate account");
    }
};
