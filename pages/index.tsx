import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import Navbar from "@/components/navbar";
import BillBoard from "@/components/billBoard";
import MovieList from "@/components/movieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  return (
    <>
      <Navbar />
      <BillBoard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="MyList" data={favorites} />
      </div>
    </>
  );
}
