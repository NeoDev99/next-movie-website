import CastCard, { ICastCard } from "@/app/_components/ui/CastCard";
import { IMovieCard } from "@/app/_components/ui/MovieCard";

interface IParamsCasts {
  params: {
    id: IMovieCard["id"];
  };
}

async function getAllCasts(id: IMovieCard["id"]) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.MOVIE_API_KEY}&language=en-US`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch casts");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

const page = async ({ params }: IParamsCasts) => {
  const { id } = params;
  const movieCast = await getAllCasts(id);

  if (!movieCast) {
    return (
      <main className="mt-5 flex flex-col mb-6">
        <div className="w-[1200px] max-w-full px-4 mx-auto">
          <h1 className="text-2xl font-medium">Failed to load casts</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="mt-5 flex flex-col mb-6">
      <div className="w-[1200px] max-w-full px-4 mx-auto">
        <div className="flex flex-col mb-6 mt-6">
          <h1 className="text-2xl font-medium">All Cast</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-4 gap-4">
          {movieCast?.cast?.map((cast: ICastCard) => (
            <CastCard key={cast?.id} cast={cast} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
