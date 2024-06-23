import Link from "next/link";
import Image from "next/image";

export default function AnimeList({ api }) {
    return (
        <section id="anime-list" className="py-10">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {api.data?.map((anime) => (
                    <Link
                        href={`/anime/${anime.mal_id}`}
                        key={anime.mal_id}
                        className="dark:bg-dark cursor-pointer rounded-lg bg-gray-300 shadow-lg transition-all hover:opacity-75"
                    >
                        <div className="max-w-xl text-center">
                            <Image
                                src={anime.images.webp.image_url}
                                alt={anime.title}
                                width={350}
                                height={350}
                                className="max-h-80 w-full rounded-t-lg object-cover"
                            />
                            <h5 className="p-4 text-lg font-bold tracking-tight lg:text-xl">
                                {anime.title}
                            </h5>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
