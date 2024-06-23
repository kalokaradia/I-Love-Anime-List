import { userSessionAuth } from "@/libs/library";
import Image from "next/image";
import Link from "next/link";
import PageNotFound from "@/app/not-found";

export default async function Page() {
    const userData = await userSessionAuth();
    return (
        <div>
            {userData ? (
                <section
                    id="dashboard"
                    className="overflow-hidden px-5 py-10 md:px-10 lg:px-12"
                >
                    <div>
                        <h1 className="mb-5 text-center text-4xl font-bold lg:text-5xl">
                            Welcome,{" "}
                            <span className="text-yellow-500 underline">
                                {userData.name}
                            </span>
                        </h1>{" "}
                        <Link
                            className="mx-auto mt-10 block w-fit text-amber-600 underline decoration-amber-600 hover:text-amber-500 hover:decoration-amber-400 dark:text-yellow-500 dark:decoration-yellow-500 dark:hover:text-yellow-400 dark:hover:decoration-yellow-400"
                            href="/"
                        >
                            Kembali
                        </Link>
                        <Link
                            className="mt-10 block w-fit text-amber-600 underline decoration-amber-600 hover:text-amber-500 hover:decoration-amber-400 dark:text-yellow-500 dark:decoration-yellow-500 dark:hover:text-yellow-400 dark:hover:decoration-yellow-400"
                            href="/"
                        />
                        <Image
                            src={userData.image}
                            alt={userData.name}
                            width={250}
                            height={250}
                            className="mx-auto mt-10 rounded-full border-4 border-amber-400 dark:border-yellow-500"
                        />
                        <div className="mt-10 flex flex-wrap">
                            <div className="mx-auto flex gap-4">
                                <Link
                                    href={`/dashboard/${userData.name}/collection`}
                                    className="bg-accent text-dark rounded-lg px-4 py-2 shadow-lg transition-all hover:opacity-75"
                                >
                                    Koleksi Saya
                                </Link>
                                <Link
                                    href={`/dashboard/${userData.name}/comment`}
                                    className="bg-accent text-dark rounded-lg px-4 py-2 shadow-lg transition-all hover:opacity-75"
                                >
                                    Komentar Saya
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <PageNotFound />
            )}
        </div>
    );
}
