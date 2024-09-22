"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import backArrowIcon from "@/public/assets2/back_arrow_icon.png";

interface MovieDetails {
    name: string;
    key: string;
    published_at: string;
    type: string;
}

const Player = () => {
    const { id } = useParams();

    const [movieDetails, setMovieDetails] = useState<MovieDetails>({
        name: "",
        key: "",
        published_at: "",
        type: "",
    });

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTVkNzgwMDM2ZDA4ZTVjNWM4NGQyMDBlYWU4NWI2ZSIsIm5iZiI6MTcyNjc1NzEzOS4yNjY0NjQsInN1YiI6IjY2ZWMzNjczMmQ2Nzc5OWFkM2ViYThkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiR2W1lYzEZYki2acaWrTCh5a6ykzOe7iBEycgBEx5c",
            }
        };
    
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then((response) => response.json())
            .then((response) => setMovieDetails(response.results[0] || {}))
            .catch((err) => console.error(err));
    }, [id]);
    

    if (!movieDetails.key) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <Image
                src={backArrowIcon}
                alt="Back Arrow"
                className="absolute top-5 left-5 w-[50px] cursor-pointer"
            />
            <iframe
                src={`https://www.youtube.com/embed/${movieDetails.key}`}
                width="90%"
                height="70%"
                title="Trailer"
                allowFullScreen
                className="rounded-lg"
            />
            <div className="flex flex-col items-center justify-center w-[90%] mt-4">
                <p className="mb-2">
                    <strong>Published Date: </strong>
                    {movieDetails.published_at ? movieDetails.published_at.slice(0, 10) : "N/A"}
                </p>
                <p className="mb-2">
                    <strong>Name: </strong>
                    {movieDetails.name || "N/A"}
                </p>
                <p>
                    <strong>Type: </strong>
                    {movieDetails.type || "N/A"}
                </p>
            </div>
        </div>
    );
};

export default Player;
