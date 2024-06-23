"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Comment({
    anime_mal_id,
    user_email,
    user_name,
    anime_title,
}) {
    const [comment, setComment] = useState("");
    const [isCreated, setIsCreated] = useState(false);
    const router = useRouter();

    function handleInput(e) {
        setComment(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            anime_mal_id,
            user_email,
            user_name,
            comment,
            anime_title,
        };
        const response = await fetch("/api/v1/comment", {
            method: "POST",
            body: JSON.stringify(data),
        });
        const postComment = await response.json();
        if (postComment.isCreated) {
            setIsCreated(true);
            setComment("");
            router.refresh();
        }
        return;
    }

    return (
        <div className="mt-10 flex flex-col">
            {isCreated && (
                <p className="text-success mx-auto mb-5 text-xl font-bold">
                    Postingan berhasil terkirim!
                </p>
            )}

            <textarea
                name="comment"
                id="comment"
                value={comment}
                className="focus:ring-accent text-dark dark:text-primary mx-auto h-[10rem] w-[30rem] rounded-lg bg-gray-300 px-4 py-2 shadow-lg focus:outline-none focus:ring-2 dark:bg-slate-800 md:mt-0"
                placeholder="Ketikkan komentarmu di sini ..."
                onChange={handleInput}
                required
            ></textarea>
            <button
                onClick={handleSubmit}
                className="bg-accent text-dark mx-auto mt-5 w-fit rounded-lg px-4 py-2 shadow-lg hover:opacity-75"
            >
                Posting
            </button>
        </div>
    );
}
