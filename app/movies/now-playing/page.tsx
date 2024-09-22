import React from "react";
import Image from "next/image";
import heroBanner from "@/public/assets2/hero_banner.jpg";
import Badge from "@/components/ui/badge";
import MovieCard, { IMovieCard } from "@/app/_components/ui/MovieCard";
import Paginate from "@/app/_components/ui/Paginate";

type Props = {
    searchParams?: {
        page?: number;
    };
};

// Fetch now-playing movies from TMDB API
async function getNowPlayingMovies(page: number) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=${page}`
    );
    return res.json();
}

const page = async ({ searchParams }: Props) => {
    const page = searchParams?.page || 1;

    // Fetching now-playing movies
    const nowPlayingMovies = await getNowPlayingMovies(page);

    return (
        <main className="mt-5 flex flex-col">
            {/* Hero Banner Section */}
            <section>
                <div className="relative">
                    {/* Hero Banner Image */}
                    <div>
                        <Image
                            src={heroBanner}
                            alt="Featured Movie Poster"
                            className="w-full [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent),linear-gradient(to_right,transparent,black_75%)] [mask-composite:intersect]"
                        />
                    </div>

                    {/* Hero Banner Content */}
                    <div className="flex flex-col justify-center absolute bottom-10 left-6 space-y-4 text-white h-full">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">The Shawshank Redemption</h1>
                        <p className="text-muted-foreground max-w-lg">
                            Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of
                            common decency.
                        </p>
                        <div className="flex items-center space-x-4">
                            <Badge variant="outline">Drama</Badge>
                            <Badge variant="outline">Crime</Badge>
                            <Badge variant="outline">1994</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Now-Playing Movies Section */}
            <div className="w-[1300px] max-w-full px-4 mx-auto mt-10">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-medium">Now Playing Movies</h1>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    {nowPlayingMovies.results.map((movie: IMovieCard) => (
                        <MovieCard key={movie?.id} movie={movie} />
                    ))}
                </div>
                <Paginate
                    currentPage={page < 1 || page > nowPlayingMovies.total_pages ? 1 : page}
                    totalPages={nowPlayingMovies.total_pages}
                    pageType="now-playing"
                />
            </div>
        </main>
    );
};

export default page;
