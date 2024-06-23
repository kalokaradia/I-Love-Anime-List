"use client";

import { useEffect, useState } from "react";
import AnimeList from "@/components/AnimeList";
import Home from "@/components/Home";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import { getAnimeResponse } from "@/libs/library";

const Page = () => {
    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState([]);

    const fetchData = async () => {
        const data = await getAnimeResponse("/top/anime", `page=${page}`);
        setTopAnime(data);
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <section className="overflow-hidden px-5 py-10 md:px-10 lg:px-12">
            <Home message={`Populer bagian ke #${page}`} />
            <Link
                href="/"
                className="mt-10 block w-fit text-amber-600 underline decoration-amber-600 hover:text-amber-500 hover:decoration-amber-400 dark:text-yellow-500 dark:decoration-yellow-500 dark:hover:text-yellow-400 dark:hover:decoration-yellow-400"
            >
                Kembali
            </Link>
            <AnimeList api={topAnime} />
            <Pagination
                page={page}
                lastPage={topAnime.pagination?.last_visible_page}
                setPage={setPage}
            />
        </section>
    );
};

export default Page;
