import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Navbar from "@/components/Navbar";
import PageWithNavbar from "@/components/UI/PageWithNavbar";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }
    return (
        <PageWithNavbar>
            <main>Dashboard Page</main>
        </PageWithNavbar>
    );
}
