"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CollectionButton({
    anime_mal_id,
    user_email,
    anime_image,
    anime_title,
}) {
    const [isCreated, setIsCreated] = useState(false);
    const router = useRouter();
    async function handleCollection(e) {
        e.preventDefault();
        const data = { anime_mal_id, user_email, anime_image, anime_title };
        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data),
        });
        const collection = await response.json();
        if (collection.isCreated) {
            setIsCreated(true);
            router.refresh();
        }
        return;
    }

    return (
        <>
            {isCreated ? (
                <p className="text-success mx-auto mb-5 text-xl font-bold">
                    Berhasil ditambahkan!
                </p>
            ) : (
                <button
                    onClick={handleCollection}
                    className="bg-accent text-dark mt-5 rounded-lg px-4 py-2 shadow-lg transition-all hover:opacity-75"
                >
                    Tambahkan ke koleksi
                </button>
            )}
        </>
    );
}
