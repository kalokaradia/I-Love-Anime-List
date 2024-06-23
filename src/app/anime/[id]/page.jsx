import CollectionButton from "@/components/CollectionButton";
import Comment from "@/components/Comment";
import CommentBox from "@/components/CommentBox";
import VideoPlayer from "@/components/VideoPlayer";
import { getAnimeResponse, userSessionAuth } from "@/libs/library";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params: { id } }) {
    const anime = await getAnimeResponse(`/anime/${id}`);
    const user = await userSessionAuth();
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id },
    });

    return (
        <div className="px-5 py-10 md:px-10 lg:px-12">
            <div>
                <h3 className="dark:text-primary text-2xl font-bold">
                    {anime.data.title} | {anime.data.year}
                </h3>
                {!collection && user && (
                    <CollectionButton
                        anime_mal_id={id}
                        user_email={user?.email}
                        anime_image={anime.data.images.webp.image_url}
                        anime_title={anime.data.title}
                    />
                )}
                <div className="mt-5 flex space-x-4 overflow-x-auto">
                    <kbd className="my-kbd">Rank: {anime.data.rank}</kbd>
                    <kbd className="my-kbd">Score: {anime.data.score}</kbd>
                    <kbd className="my-kbd">Rating: {anime.data.rating}</kbd>
                    <kbd className="my-kbd">Members: {anime.data.members}</kbd>
                    <kbd className="my-kbd">Episode: {anime.data.episodes}</kbd>
                    <kbd className="my-kbd">
                        Aired: {anime.data.aired.string}
                    </kbd>
                    <kbd className="my-kbd">
                        Duration: {anime.data.duration}
                    </kbd>
                </div>
                <Link
                    href="/"
                    className="text-accent mt-10 block w-fit underline"
                >
                    Kembali ke Home
                </Link>
            </div>
            <div className="my-10">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.title}
                    width={200}
                    height={200}
                    className="rounded-lg shadow-lg"
                />
            </div>
            <div className="mb-10">
                <h2 className="indent-4 text-xl font-bold">Sinopsis:</h2>
                <p className="indent-4">{anime.data.synopsis}</p>
            </div>
            <div className="mb-10">
                <h2 className="text-center text-3xl font-bold">Komentar:</h2>
                {user && (
                    <Comment
                        anime_mal_id={id}
                        user_email={user?.email}
                        user_name={user?.name}
                        anime_title={anime.data.title}
                    />
                )}
            </div>
            <div className="mb-44">
                <h2 className="text-center text-3xl font-bold">
                    Komentar Orang:
                </h2>
                <CommentBox anime_mal_id={id} />
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>
        </div>
    );
}
