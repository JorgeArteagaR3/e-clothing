"use client";
import {
    FacebookSignInButton,
    GoogleSignInButton,
} from "@/components/AuthButtons";
import Link from "next/link";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function LoginPage() {
    return (
        <div className="grid grid-cols-2 min-h-screen">
            <div className="relative">
                <div className="absolute w-full h-full bg-[rgba(0,0,0,0.6)] z-10"></div>
                <div
                    className="bg-cover h-full"
                    style={{
                        backgroundImage:
                            "url('https://ecommerce-app-two-zeta.vercel.app/static/media/man.10322bd3e819ee4d61f3.webp')",
                    }}
                >
                    <Link href="/" className="relative z-30">
                        Logo
                    </Link>
                </div>
            </div>

            <div className="flex justify-center items-center ">
                <div className="p-4 border border-border rounded-md w-96">
                    <h2 className="font-bold mb-2">Sign In</h2>
                    <p className="text-secondarytext mb-2">
                        Choose your preferred sign in method
                    </p>
                    <div className="flex justify-between">
                        <GoogleSignInButton />
                        <FacebookSignInButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
