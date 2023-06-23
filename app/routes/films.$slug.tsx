import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { GetFilmByTitle } from "~/api/films";
import type { Film } from "~/api/films";
import ArrowLeft from "~/assets/icons/ArrowLeft";
import CharacterList from "~/components/CharacterList";
import FilmData from "~/components/FilmData";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const slug = url.pathname.split("/").pop();
  return GetFilmByTitle(slug);
};

export default function SingleFilm() {
  const film = useLoaderData<Film>();

  return (
    <div>
      <div className="mb-10">
        <Link to="/films" className="flex items-center">
          <ArrowLeft />
          <span className="ml-2">Go back</span>
        </Link>
      </div>
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-3">
          <img src={film.poster} alt={film.title} className="w-full h-auto" />
        </div>
        <div className="col-span-6 col-start-5">
          <h1 className="text-5xl font-bold mb-10">{film.title}</h1>

          <p>{film.synopsis}</p>

          <FilmData film={film} />

          <CharacterList characters={film.character} />
        </div>
      </div>
    </div>
  );
}
