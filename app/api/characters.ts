export type Character = {
  name: string;
  imageUrl: string;
};

export async function GetCharacters() {
  const response = await fetch("https://api.disneyapi.dev/character");

  const { data } = await response.json();

  const characters: Character[] = data;

  return characters;
}
