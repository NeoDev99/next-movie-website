import React from "react";
import Link from "next/link";
import Image from "next/image";

import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/config/imageConfig";

export interface IMovieCard {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const MovieCard = ({ movie }: { movie: IMovieCard }) => {
  // Format the vote_average to one decimal place
  const formattedVoteAverage = movie.vote_average.toFixed(1);

  return (
    <Link href={`/movie/${movie.id}`} className="group">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={
            movie.poster_path
              ? `${IMAGE_URL}${movie.poster_path}`
              : `${EMPTY_MOVIE_URL}`
          }
          alt={movie.title}
          width={300}
          height={450}
          className="h-auto max-w-full transition-transform duration-300 group-hover:scale-105"
          style={{ aspectRatio: "300/450", objectFit: "cover" }}
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-lg font-medium group-hover:text-primary-foreground">
          {movie.title}
        </h2>
        <span
          className={`flex flex-col p-2 text-white rounded-md ${
            parseFloat(formattedVoteAverage) < 5
              ? `bg-red-700`
              : parseFloat(formattedVoteAverage) === 5
              ? `bg-orange-700`
              : `bg-green-700`
          }`}
        >
          {formattedVoteAverage}
        </span>
      </div>
    </Link>
  );
};

export default MovieCard;
