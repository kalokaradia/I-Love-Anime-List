export default function Home({ message, title }) {
    return (
        <section id="home" className="bg-accent px-10 py-10">
            <h1 className="text-dark my-5 text-center text-3xl font-bold lg:text-4xl">
                I <span className="text-rose-500">Love</span> Anime List
            </h1>

            <p className="text-dark text-center">{message}</p>
        </section>
    );
}
