import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/library";
import Link from "next/link";

export default async function Page({ params }) {
    const { keyword } = params;
    const decodedKeyword = decodeURI(keyword);
    const anime = await getAnimeResponse("/anime", `q=${keyword}`);

    return (
        <section className="overflow-hidden px-5 py-10 md:px-10 lg:px-12">
            <section id="populer">
                <h1 className="mt-5 text-2xl font-medium">
                    Hasil dari {decodedKeyword}...
                </h1>{" "}
                <Link
                    href="/"
                    className="mt-10 block w-fit text-amber-600 underline decoration-amber-600 hover:text-amber-500 hover:decoration-amber-400 dark:text-yellow-500 dark:decoration-yellow-500 dark:hover:text-yellow-400 dark:hover:decoration-yellow-400"
                >
                    Kembali
                </Link>
                <AnimeList api={anime} />
            </section>
        </section>
    );
}
