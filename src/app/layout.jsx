import Navbar from "@/components/Navbar";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";
import Dark from "@/components/Dark";

const patrick = Patrick_Hand({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
    title: "I Love Anime List",
    description: "Tempat nyari anime seru.",
    keywords:
        "anime,list anime,wesbite,react,nextjs,kalokaradiananda,HTML,CSS,JavaScript,JS,JSX",
    author: "kalokaradiananda",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${patrick.className} dark:text-primary bg-white text-lg transition-all dark:bg-slate-950`}
            >
                <Navbar />
                {children}
                <Dark />
            </body>
        </html>
    );
}
