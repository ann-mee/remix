import type { Film } from "~/api/films";
import FilmCard from "./FilmCard";

export default function TopFilms({ films }: { films: Film[] }) {
  return (
    <div className="grid grid-cols-4 gap-12">
      {films.map((film, index) => (
        <div key={index} className="text-white">
          <FilmCard film={film} />
        </div>
      ))}
    </div>
  );
}
