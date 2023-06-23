import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { GetTopFilms } from "~/api/films";
import TopFilms from "~/components/TopFilms";

export const loader: LoaderFunction = async ({ request }) => {
  return GetTopFilms(4);
};

export default function Index() {
  const topFilms = useLoaderData();

  return (
    <div className="bg-teal-900 h-full">
      <div className="flex items-center h-full">
        <div className="container mx-auto ">
          <h1 className="text-7xl text-white font-bold mb-14 text-center">
            Top 4 Ghibli Films
          </h1>
          <TopFilms films={topFilms} />

          <div className="text-center mt-14">
            <Link
              to="/films"
              className=" bg-teal-200 hover:bg-teal-400 py-4 px-14 rounded-md transition duration-150"
            >
              See all
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
