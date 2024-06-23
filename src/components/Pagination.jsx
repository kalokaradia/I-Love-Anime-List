export default function Pagination({ page, lastPage, setPage }) {
    function scrollTop() {
        scrollTo({ behavior: "smooth", top: 0 });
    }

    function handleNextPage() {
        setPage((prev) => prev + 1);
        scrollTop();
    }

    function handlePrevPage() {
        setPage((prev) => prev - 1);
        scrollTop();
    }

    return (
        <div className="flex items-center justify-center gap-4 px-2 py-4">
            {page === 1 ? null : (
                <button
                    className="bg-accent text-dark rounded-lg px-4 py-2 shadow-lg transition-all hover:opacity-75"
                    onClick={handlePrevPage}
                >
                    Prev
                </button>
            )}
            <p>
                {page} dari {lastPage}
            </p>
            {page === lastPage ? null : (
                <button
                    className="bg-accent text-dark rounded-lg px-4 py-2 shadow-lg transition-all hover:opacity-75"
                    onClick={handleNextPage}
                >
                    Next
                </button>
            )}
        </div>
    );
}
