import AnimeList from "@/components/AnimeList";
import Home from "@/components/Home";
import TitleList from "@/components/TitleList";
import TitleListNoLink from "@/components/TitleListNoLink";
import UserAuth from "@/components/UserAuth";
import {
    getAnimeResponse,
    getNestedAnimeResponse,
    getRandomData,
} from "@/libs/library";

export default async function Page() {
    const topAnime = await getAnimeResponse("/top/anime", "limit=8");
    let recommendedAnime = await getNestedAnimeResponse(
        "/recommendations/anime",
        "entry",
    );
    recommendedAnime = getRandomData(recommendedAnime, 8);

    return (
        <section className="overflow-hidden px-5 py-10 md:px-10 lg:px-12">
            <Home message="Tempat nyari anime seru" />
            <UserAuth />

            {/* 🚀 Top Anime */}
            <section id="populer">
                <TitleList title="Populer" linkUrl="populer" />
                <AnimeList api={topAnime} />
            </section>

            {/* 🚀 Recommended Anime */}
            <section id="baru">
                <TitleListNoLink title="Rekomendasi" linkUrl="recommended" />
                <AnimeList api={recommendedAnime} />
            </section>
        </section>
    );
}
