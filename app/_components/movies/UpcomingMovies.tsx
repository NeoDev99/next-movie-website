import React from "react";
import Link from "next/link";

import MovieCard, { IMovieCard } from "../ui/MovieCard";

const UpcomingMovies = ({ upcomingMovies }: { upcomingMovies: any }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Upcoming Movies
          </h1>
          <Link
            href="/movies/upcoming"
            className="py-2 px-5 bg-slate-800 text-md font-normal text-white"
          >
            See all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {upcomingMovies.results.slice(0, 5).map((movie: IMovieCard) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMovies;
