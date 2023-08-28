import type { Film } from "api/films";

export default function FilmData({ film }: { film: Film }) {
  return (
    <table className="my-6">
      <tbody>
        <tr>
          <td>Release</td>
          <td>{film.release_date}</td>
        </tr>
        <tr>
          <td>Director</td>
          <td>{film.director}</td>
        </tr>
        <tr>
          <td>Runtime</td>
          <td>{film.running_time}m</td>
        </tr>
      </tbody>
    </table>
  );
}
