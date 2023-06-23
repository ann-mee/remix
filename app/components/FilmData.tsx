import type { Film } from "~/api/films";

export default function FilmData({ film }: { film: Film }) {
  return (
    <table className="my-6">
      <tbody>
        <tr>
          <td className="w-32">Genre</td>
          <td>{film.genre}</td>
        </tr>
        <tr>
          <td>Release</td>
          <td>{film.release}</td>
        </tr>
        <tr>
          <td>Director</td>
          <td>{film.director}</td>
        </tr>
        <tr>
          <td>Runtime</td>
          <td>{film.runtimeMinutes}m</td>
        </tr>
      </tbody>
    </table>
  );
}
