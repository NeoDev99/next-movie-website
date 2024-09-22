"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Badge from "../ui/badge";
import { genreMap } from "@/utils/genreMap";
import { DotLottiePlayer } from '@dotlottie/react-player';

const Hero = () => {
    const [nowPlayingMovie, setNowPlayingMovie] = useState<any>(null);

    // Fetch Now Playing Movie
    useEffect(() => {
        const fetchNowPlaying = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTVkNzgwMDM2ZDA4ZTVjNWM4NGQyMDBlYWU4NWI2ZSIsIm5iZiI6MTcyNjc1NzEzOS4yNjY0NjQsInN1YiI6IjY2ZWMzNjczMmQ2Nzc5OWFkM2ViYThkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiR2W1lYzEZYki2acaWrTCh5a6ykzOe7iBEycgBEx5c',
                },
            };

            try {
                const response = await fetch(
                    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
                    options
                );
                const data = await response.json();
                if (data?.results?.length > 0) {
                    setNowPlayingMovie(data.results[0]);
                }
            } catch (error) {
                console.error("Failed to fetch now-playing movies:", error);
            }
        };

        fetchNowPlaying();
    }, []);

    // Function to trim the overview text
    const trimOverview = (overview: string, maxLength: number) => {
        if (overview.length <= maxLength) {
            return overview;
        }
        return `${overview.slice(0, maxLength)}...`;
    };

    if (!nowPlayingMovie) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <section>
            <div>
                <div className="relative">
                    <div>
                        <Image
                            src={`https://image.tmdb.org/t/p/original/${nowPlayingMovie.backdrop_path}`}
                            alt="Featured Movie Poster"
                            className="w-full [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent),linear-gradient(to_right,transparent,black_75%)] [mask-composite:intersect]"
                            width={1280}
                            height={720}
                        />
                    </div>

                    <div className="flex flex-col justify-center absolute bottom-0 md:bottom-10 left-6 space-y-4 text-white h-full">
                        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold tracking-tight pt-48 md:pt-0">
                            {nowPlayingMovie.title}
                        </h1>
                        <p className="text-xs md:text-lg max-w-lg">
                            {trimOverview(nowPlayingMovie.overview, 150)}
                        </p>
                        <div className="flex items-center space-x-4">
                            {nowPlayingMovie.genre_ids.slice(0, 2).map((genreId: number) => (
                                <Badge key={genreId} variant="outline">
                                    {genreMap[genreId] || "Unknown"}
                                </Badge>
                            ))}
                            <Badge variant="default">
                                {nowPlayingMovie.release_date.slice(0, 4)}
                            </Badge>
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 py-3">
                            <Link
                                href={`/player/${nowPlayingMovie.id}`}
                                className="inline-flex items-center justify-center bg-white text-black hover:bg-red-600 hover:text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 text-sm md:text-lg rounded-md transition-colors duration-300"
                                prefetch={false}
                            >
                                <DotLottiePlayer
                                    src="/assets/lottie/play.lottie" 
                                    className="mr-2"
                                    loop
                                    autoplay
                                    style={{ height: '40px', width: '40px' }}
                                />
                                Watch Now
                            </Link>
                            <Link
                                href={`/movie/${nowPlayingMovie.id}`}
                                className="inline-flex items-center justify-center text-white bg-white/15 hover:bg-red-500 hover:text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 text-sm md:text-lg  rounded-md transition-colors duration-300"
                                prefetch={false}
                            >
                                <DotLottiePlayer
                                    src="/assets/lottie/click.lottie" 
                                    className="mr-2"
                                    loop
                                    autoplay
                                    style={{ height: '25px', width: '25px' }}
                                />
                                More Info
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
