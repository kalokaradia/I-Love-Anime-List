export default function TitleListNoLink({ title }) {
    return (
        <div className="pt-10">
            {title ? (
                <div>
                    <h2 className="mb-10 text-3xl">{title}</h2>
                </div>
            ) : null}
        </div>
    );
}
