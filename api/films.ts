import { getComments } from "./comments";
import type { Comment } from "./comments";

export type Character = {
  name: string;
};

export type Film = {
  id: string;
  title: string;
  movie_banner: string;
  synopsis: string;
  character: Character[];
  release_date: string;
  director: string;
  running_time: string;
  rt_score: string;
  comments: Comment[];
};

export async function GetFilms(title: string | null) {
  let url = new URL("https://ghibliapi.vercel.app/films/");

  try {
    const response = await fetch(url);
    const films: Film[] = await response.json();

    return films.filter((film) =>
      title ? film.title.toLowerCase().includes(title.toLowerCase()) : true
    );
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch data from the API." };
  }
}

export async function GetTopFilms(number: number = 3) {
  let url = new URL("https://ghibliapi.vercel.app/films/");

  try {
    const response = await fetch(url);
    const films: Film[] = await response.json();

    const sortedFilms = films.sort((a, b) => {
      const aScore = parseInt(a.rt_score);
      const bScore = parseInt(b.rt_score);
      return bScore - aScore;
    });
    console.log(sortedFilms);
    return sortedFilms.slice(0, number);
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch data from the API." };
  }
}

export async function GetFilmById(id: string | undefined) {
  if (!id) return;

  let url = new URL(`https://ghibliapi.vercel.app/films/${id}`);

  try {
    const response = await fetch(url);
    const film: Film = await response.json();

    console.log(film);

    const comments = await getComments(id);

    return { ...film, comments };
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch data from the API." };
  }
}
