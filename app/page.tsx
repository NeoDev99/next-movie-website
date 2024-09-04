import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";

import UpcomingMovies from "./_components/movies/UpcomingMovies";
import PopularMovies from "@/app/_components/movies/PopularMovies";
import TopRatedMovies from "./_components/movies/TopRatedMovies";

async function getMovies(type: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.MOVIE_API_KEY}&language=en-US`
  );
  return res.json();
}

export default async function Home() {
  const upcomingMovies = await getMovies("upcoming");
  const popularMovies = await getMovies("popular");
  const topRatedMovies = await getMovies("top_rated");
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <section>
          <div className="flex flex-col">
            <div className="w-[1300px] max-w-full px-4 mx-auto">
              <UpcomingMovies upcomingMovies={upcomingMovies} />
              <PopularMovies popularMovies={popularMovies} />
              <TopRatedMovies topRatedMovies={topRatedMovies} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
