"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Search() {
    const searchRef = useRef();
    const router = useRouter();

    function handleSearch(e) {
        const keyword = searchRef.current.value;
        if (!keyword || keyword.trim() == "") return;
        if (e.key === "enter" || e.type === "click") {
            e.preventDefault();
            router.push(`/search/${keyword}`);
        }
    }

    return (
        <form className="flex space-x-5">
            <input
                type="search"
                name="search"
                id="search"
                placeholder="Cari anime ..."
                className="dark:bg-dark dark:text-primary mt-10 h-fit max-w-lg rounded-lg px-4 py-2 focus:outline-none focus:ring-4 md:mt-0"
                ref={searchRef}
            />
            <button
                className="dark:bg-dark dark:text-primary bg-primary mt-10 w-fit rounded-lg px-4 py-2 md:mt-0"
                onClick={handleSearch}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
            </button>
        </form>
    );
}
