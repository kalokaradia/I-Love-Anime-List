import Image from "next/image";
import { userSessionAuth } from "@/libs/library";
import prisma from "@/libs/prisma";
import Link from "next/link";

export default async function Page() {
    const user = await userSessionAuth();
    const collection = await prisma.collection.findMany({
        where: { user_email: user.email },
    });

    return (
        <section
            id="dashboard-collection"
            className="overflow-hidden px-5 py-10 md:px-10 lg:px-12"
        >
            <div>
                <h1 className="mb-5 text-center text-4xl font-bold lg:text-5xl">
                    My Collection
                </h1>{" "}
                <Link
                    className="my-10 block w-fit text-amber-600 underline decoration-amber-600 hover:text-amber-500 hover:decoration-amber-400 dark:text-yellow-500 dark:decoration-yellow-500 dark:hover:text-yellow-400 dark:hover:decoration-yellow-400"
                    href="/"
                >
                    Kembali ke Home
                </Link>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {collection.map((collect, index) => {
                        return (
                            <Link
                                href={`/anime/${collect.anime_mal_id}`}
                                key={index}
                                className="bg-primary dark:bg-dark hover:text-accent cursor-pointer rounded-lg shadow-lg transition-all"
                            >
                                <div className="max-w-xl text-center">
                                    <Image
                                        src={collect.anime_image}
                                        alt={collect.anime_title}
                                        width={350}
                                        height={350}
                                        className="max-h-80 w-full rounded-t-lg object-cover"
                                    />
                                    <h5 className="p-4 text-lg font-bold tracking-tight lg:text-xl">
                                        {collect.anime_title}
                                    </h5>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
