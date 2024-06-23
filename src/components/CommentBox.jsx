export default async function CommentBox({ anime_mal_id }) {
    const comments = await prisma.comment.findMany({ where: { anime_mal_id } });
    return (
        <div className="bg-secondary mt-10 h-[27rem] space-y-4 overflow-y-scroll rounded-lg px-4 py-2 shadow-lg dark:bg-slate-800">
            {comments.map((comment) => {
                return (
                    <div
                        key={comment.id}
                        className="dark:bg-accent w-fit rounded-lg bg-slate-300 px-4 py-2 shadow-lg"
                    >
                        <p className="text-dark text-xl font-medium">
                            {comment.user_name}
                        </p>
                        <p className="text-dark mt-5 text-lg">
                            {comment.comment}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
