"use client";

import { useState } from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ youtubeId }) {
    const [isOpen, setIsOpen] = useState(true);

    function handleCloseButton() {
        setIsOpen((prev) => !prev);
    }

    const option = {
        width: 320,
        height: 180,
    };

    function Player() {
        return (
            <div className="fixed bottom-2 left-2">
                <button
                    onClick={handleCloseButton}
                    className="bg-accent text-dark float-right mb-2 h-8 w-8 rounded-[100%] text-xl font-bold"
                >
                    &times;
                </button>
                <YouTube
                    videoId={youtubeId}
                    onReady={(e) => {
                        e.target.pauseVideo();
                    }}
                    onError={() => alert("Video error!")}
                    opts={option}
                />
            </div>
        );
    }

    function ReplayPlayer() {
        return (
            <div className="fixed bottom-6">
                <button
                    onClick={handleCloseButton}
                    className="bg-accent text-dark rounded-lg px-2 py-1 text-lg font-bold shadow-lg"
                >
                    Lihat Trailer
                </button>
            </div>
        );
    }

    return isOpen ? <Player /> : <ReplayPlayer />;
}
