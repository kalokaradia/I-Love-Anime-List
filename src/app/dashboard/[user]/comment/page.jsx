import { userSessionAuth } from "@/libs/library";
import prisma from "@/libs/prisma";
import Link from "next/link";
import React from "react";

export default async function Page() {
    const user = await userSessionAuth();
    const comments = await prisma.comment.findMany({
        where: { user_email: user.email },
    });
    console.log("🚀 ~ Page ~ comments:", comments);

    return (
        <section
            id="dashboard-comments"
            className="overflow-hidden px-5 py-10 md:px-10 lg:px-12"
        >
            <div>
                <h1 className="mb-5 text-center text-4xl font-bold lg:text-5xl">
                    My Comments
                </h1>{" "}
                <Link
                    className="my-10 block w-fit text-amber-600 underline decoration-amber-600 hover:text-amber-500 hover:decoration-amber-400 dark:text-yellow-500 dark:decoration-yellow-500 dark:hover:text-yellow-400 dark:hover:decoration-yellow-400"
                    href="/"
                >
                    Kembali ke Home
                </Link>
                <div className="grid grid-cols-1 gap-5">
                    {comments.map((comment) => {
                        return (
                            <Link
                                href={`/anime/${comment.anime_mal_id}`}
                                key={comment.id}
                                className="text-dark dark:text-primary w-full rounded-lg bg-slate-300 px-4 py-2 shadow-lg dark:bg-slate-800"
                            >
                                <h1 className="text-2xl font-bold">
                                    {comment.anime_title}
                                </h1>
                                <hr className="my-2 rounded-lg border-[1.5px]" />
                                <p className="text-lg italic">
                                    &ldquo;{comment.comment}&ldquo;
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
