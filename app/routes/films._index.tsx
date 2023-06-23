import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { GetFilms } from "~/api/films";
import FilmCard from "~/components/FilmCard";
import Search from "~/components/Search";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");
  return GetFilms(title);
};

export default function FilmsIndex() {
  const films = useLoaderData();

  return (
    <div>
      <h1 className="text-5xl my-10">Ghibli Studio Films</h1>

      <Search />

      <div className="grid grid-cols-4 gap-x-12 gap-y-8 mt-10">
        {films.map((film: any, index: number) => (
          <FilmCard film={film} key={index} />
        ))}
      </div>
    </div>
  );
}
