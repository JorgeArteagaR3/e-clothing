"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
function Navbar() {
    const { data, status } = useSession();
    const router = useRouter();
    console.log({ data });
    return (
        <header className="border-b border-border w-full p-4">
            <nav className="flex justify-between">
                <div>
                    <Link href={"/"}> E Clothing</Link>
                </div>
                <ul className="flex gap-2">
                    <li>
                        <Link href={"/dashboard"}>Dashboard</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>About</Link>
                    </li>
                    {data?.user ? (
                        <Link
                            href={"/"}
                            onClick={() => {
                                signOut({ callbackUrl: "/" });
                            }}
                        >
                            Log Out
                        </Link>
                    ) : (
                        <li>
                            <Link href={"/login"}>Login</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
