"use client";
import { signIn } from "next-auth/react";
import { AiOutlineGoogle } from "react-icons/ai";
export const GoogleSignInButton = () => {
    const handleSignIn = () => {
        signIn("google", {
            callbackUrl: "/dashboard",
        });
    };
    return (
        <button
            className=" text-lighttext flex items-center p-2 rounded-md hover:bg-border duration-150 border border-border"
            onClick={handleSignIn}
        >
            <AiOutlineGoogle />
            <span className="ml-2">Google</span>
        </button>
    );
};

export const FacebookSignInButton = () => {
    return (
        <button
            onClick={() => {
                signIn("facebook", {
                    callbackUrl: "/dashboard",
                });
            }}
        >
            Facebook
        </button>
    );
};
