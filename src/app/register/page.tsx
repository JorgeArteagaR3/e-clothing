"use client";
import { registerUser } from "@/services/user";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function Register() {
    const [newUser, setNewUser] = useState({
        password: "",
        email: "",
        fullname: "",
    });

    const [error, setError] = useState("");
    const router = useRouter();
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            const res = await registerUser(newUser);
            const { data } = await res;

            const signInResponse = await signIn("credentials", {
                email: data.email,
                password: newUser.password,
                redirect: false,
            });
            if (signInResponse?.ok) return router.push("/dashboard");
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        }
    };

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="container mx-auto">
            <form
                action=""
                className="flex flex-col gap-2"
                onSubmit={handleSubmit}
            >
                {error && <div className="bg-red-500">{error}</div>}
                <input
                    type="text"
                    placeholder="Full Name"
                    name="fullname"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Some@email.com"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="*****"
                    name="password"
                    onChange={handleChange}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
