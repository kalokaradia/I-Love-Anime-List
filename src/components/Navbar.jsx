import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
    return (
        <header
            id="navbar"
            className="bg-accent text-dark flex flex-col items-center justify-between p-5 px-12 md:flex-row"
        >
            <div>
                <Link href="/" className="text-2xl font-bold">
                    I <span className="text-rose-500">Love</span> Anime List
                </Link>
            </div>

            <div>
                <Search />
            </div>
        </header>
    );
}
