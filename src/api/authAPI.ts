interface SignInResponse {
    accessToken: string;
    refreshToken: string;
}

interface IBody {
    email: string;
    password: string;
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
