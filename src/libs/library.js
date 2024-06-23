import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export async function getAnimeResponse(resource, query) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}?${query}`,
    );
    const anime = await response.json();
    return anime;
}

export async function getNestedAnimeResponse(resource, objectProperty) {
    const response = await getAnimeResponse(resource);
    return response.data.flatMap((item) => item[objectProperty]);
}

export function getRandomData(data, gap) {
    const first = ~~(Math.random() * (data.length - gap) + 1);
    const last = first + gap;
    const response = {
        data: data.slice(first, last),
    };
    return response;
}

export async function userSessionAuth() {
    const session = await getServerSession(authOption);
    return session?.user;
}
