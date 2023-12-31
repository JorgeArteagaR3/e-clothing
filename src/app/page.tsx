import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Navbar from "@/components/Navbar";
import PageWithNavbar from "@/components/UI/PageWithNavbar";

export default async function Home() {
    const session = await getServerSession(authOptions);
    if (!session) {
        console.log("NO HAY SESSION");
    } else {
        console.log(session);
    }
    return (
        <PageWithNavbar>
            <main>{JSON.stringify(session)}</main>
        </PageWithNavbar>
    );
}
