import { getComments } from "./comments";
import type { Comment } from "./comments";

export type Character = {
  name: string;
};

type Reviews = {
  rottenTomatoes: string;
  imdb: string;
};

export type Film = {
  title: string;
  poster: string;
  synopsis: string;
  character: Character[];
  genre: string;
  release: string;
  director: string;
  runtimeMinutes: string;
  reviews: Reviews;
  slug: string;
  comments: Comment[];
};

export async function GetFilms(title: string | null) {
  let url = new URL("https://studio-ghibli-films-api.herokuapp.com/api/");

  try {
    const response = await fetch(url);
    const data: Film[] = await response.json();
    const films = Object.values(data);

    const updatedFilms = films.map((film) => {
      const slug = film.title.toLowerCase().replace(/\s+/g, "-");
      return {
        ...film,
        slug,
      };
    });

    return updatedFilms.filter((film) =>
      title ? film.title.toLowerCase().includes(title.toLowerCase()) : true
    );
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch data from the API." };
  }
}

export async function GetTopFilms(number: number = 3) {
  let url = new URL("https://studio-ghibli-films-api.herokuapp.com/api/");

  try {
    const response = await fetch(url);
    const data: Film[] = await response.json();
    const films = Object.values(data);

    const updatedFilms = films.map((film) => {
      const slug = film.title.toLowerCase().replace(/\s+/g, "-");
      return {
        ...film,
        slug,
      };
    });

    const sortedFilms = updatedFilms.sort((a, b) => {
      const aRotten = parseInt(a.reviews.rottenTomatoes.slice(0, -1));
      const bRotten = parseInt(b.reviews.rottenTomatoes.slice(0, -1));
      return bRotten - aRotten;
    });

    return sortedFilms.slice(0, number);
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch data from the API." };
  }
}

export async function GetFilmByTitle(slug: string | undefined) {
  if (!slug) return;
  const title = slug
    .replace(/-/g, " ")
    .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
  let url = new URL(
    `https://studio-ghibli-films-api.herokuapp.com/api/${title}`
  );

  try {
    const response = await fetch(url);
    const film: Film = await response.json();

    const comments = await getComments(slug);

    return { ...film, comments };
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch data from the API." };
  }
}
