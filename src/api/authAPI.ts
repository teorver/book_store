// authAPI.ts
interface SignInResponse {
    accessToken: string;
    refreshToken: string;
}

export const signInAPI = async (
    email: string,
    password: string
): Promise<SignInResponse> => {
    try {
        const response = await fetch("https://studapi.teachmeskills.by/auth/jwt/create/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
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
    } catch (error) {
        throw new Error(error.message || "Failed to sign in");
    }
};
