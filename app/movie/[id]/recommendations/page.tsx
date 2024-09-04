import MovieCard, { IMovieCard } from "@/app/_components/ui/MovieCard";

interface IParamsRecommendations {
  params: {
    id: IMovieCard["id"];
  };
}

async function getAllRecommendations(id: IMovieCard["id"]) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.MOVIE_API_KEY}&language=en-US`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch recommendations");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

const page = async ({ params }: IParamsRecommendations) => {
  const { id } = params;
  const movieRecommendations = await getAllRecommendations(id);

  if (!movieRecommendations || movieRecommendations.results.length === 0) {
    return (
      <main className="mt-5 flex flex-col mb-6">
        <div className="w-[1200px] max-w-full px-4 mx-auto">
          <h1 className="text-2xl font-medium">No Recommendations Found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="mt-5 flex flex-col mb-6">
      <div className="w-[1200px] max-w-full px-4 mx-auto">
        <div className="flex flex-col mb-6 mt-6">
          <h1 className="text-2xl font-medium">All Recommendations</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-4 gap-4">
          {movieRecommendations.results.map((movie: IMovieCard) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
