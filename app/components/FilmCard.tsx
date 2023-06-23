import { Link } from "@remix-run/react";
import type { Film } from "~/api/films";

export default function FilmCard({ film }: { film: Film }) {
  return (
    <Link
      to={film.slug}
      className="hover:scale-105 transition duration-200 cursor-pointer"
      prefetch="none"
    >
      <div className="h-60 overflow-hidden">
        <img
          src={film.poster}
          alt={film.title}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-xl font-bold mt-4">{film.title}</p>
    </Link>
  );
}
