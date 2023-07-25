import type { Character } from "api/films";

export default function CharacterList({
  characters,
}: {
  characters: Character[];
}) {
  return (
    <div>
      <h2 className="text-2xl mb-6">Characters</h2>
      {characters.map((character, index) => (
        <p key={index}>{character.name}</p>
      ))}
    </div>
  );
}
