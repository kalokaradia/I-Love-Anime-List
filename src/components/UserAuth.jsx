import Link from "next/link";
import { userSessionAuth } from "@/libs/library";

export default async function UserAuth() {
    const user = await userSessionAuth();

    const actionLabel = user ? "Sign Out" : "Sign In";
    const actionUrl = user ? "/api/auth/signout" : "api/auth/signin";

    return (
        <div className="flex gap-4">
            <Link
                href={actionUrl}
                className="bg-accent text-dark mt-10 block w-fit rounded-lg px-4 py-2 text-base font-bold shadow-lg transition-all hover:opacity-75 md:text-lg"
            >
                {actionLabel}
            </Link>
            {user ? (
                <Link
                    href={`/dashboard/${user.name}`}
                    className="bg-accent text-dark mt-10 block w-fit rounded-lg px-4 py-2 text-base font-bold shadow-lg transition-all hover:opacity-75 md:text-lg"
                >
                    Dashboard
                </Link>
            ) : null}
        </div>
    );
}
