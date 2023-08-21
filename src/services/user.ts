import { INewUser } from "@/types/user";

export const registerUser = async (user: INewUser) => {
    const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(user),
    });
    if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message);
    }
    return res.json();
};
