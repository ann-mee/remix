import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { GetFilms } from "~/api/films";
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
      <h1 className="text-5xl my-10">Ghibli Films</h1>

      <Search />

      <div className="grid grid-cols-4 gap-x-12 gap-y-8 mt-10">
        {films.map((film: any, index: number) => (
          <Link
            key={index}
            to={film.slug}
            className="hover:shadow-xl hover:scale-105 transition duration-200 cursor-pointer"
            prefetch="intent"
          >
            <div className="h-60 overflow-hidden">
              <img
                src={film.poster}
                alt={film.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p>{film.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
