import {
  redirect,
  type ActionFunction,
  type LoaderFunction,
} from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { addComment } from "api/comments";
import { GetFilmById } from "api/films";
import type { Film } from "api/films";
import ArrowLeft from "~/assets/icons/ArrowLeft";
import CharacterList from "~/components/CharacterList";
import FilmData from "~/components/FilmData";
import CommentsBlock from "~/components/CommentsBlock";

export const action: ActionFunction = async ({ request, params }) => {
  invariant(params.id, "expected params.id");
  const body = await request.formData();

  const comment = {
    name: body.get("name") as string,
    message: body.get("message") as string,
    id: params.id,
  };

  await addComment(comment);
  return redirect(`/films/${params.id}`);
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();
  return GetFilmById(id);
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
          <img
            src={film.movie_banner}
            alt={film.title}
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-6 col-start-5">
          <h1 className="text-5xl font-bold mb-10">{film.title}</h1>

          <p>{film.synopsis}</p>

          <FilmData film={film} />

          {/* <CharacterList characters={film.people} /> */}

          <CommentsBlock comments={film.comments} />
        </div>
      </div>
    </div>
  );
}
