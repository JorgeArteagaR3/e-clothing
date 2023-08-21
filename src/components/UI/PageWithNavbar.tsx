import { ReactNode } from "react";
import Navbar from "../Navbar";
type Props = {
    children: ReactNode;
};
export default function ({ children }: Props) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}
