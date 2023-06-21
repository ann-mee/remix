import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Character } from "~/api/characters";
import { GetCharacters } from "~/api/characters";
import Search from "~/components/Serach";

export const loader: LoaderFunction = async () => {
  return GetCharacters();
};

export default function CharactersIndex() {
  const characters = useLoaderData<Character[]>();

  return (
    <div>
      <h1 className="text-5xl">Characters</h1>

      <div className="grid grid-cols-4 gap-x-12 gap-y-8">
        {characters.map((character: any, index: number) => (
          <div
            key={index}
            className="hover:shadow-xl hover:scale-105 transition duration-200 cursor-pointer"
          >
            <div className="h-60 overflow-hidden">
              <img
                src={character.imageUrl}
                alt={character.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
