import Link from "next/link";

export default function TitleList({ linkUrl, title }) {
    return (
        <div className="pt-10">
            {linkUrl && title ? (
                <div>
                    <h2 className="mb-10 text-3xl">{title}</h2>
                    <div className="mb-10">
                        <Link
                            href={`/${linkUrl}`}
                            className="dark:text-accent mt-10 block w-fit underline transition-all hover:opacity-75"
                        >
                            Lihat Semua
                        </Link>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
