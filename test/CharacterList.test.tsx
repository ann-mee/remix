import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CharacterList from "../app/components/CharacterList";
import type { Character } from "api/films";

describe("CharacterList component", () => {
  const mockCharacters: Character[] = [
    { name: "Character 1" },
    { name: "Character 2" },
    { name: "Character 3" },
  ];

  test("renders characters list correctly", () => {
    render(<CharacterList characters={mockCharacters} />);

    mockCharacters.forEach((character) => {
      const characterElement = screen.getByText(character.name);
      expect(characterElement).toBeInTheDocument();
    });
  });

  test("renders correct number of characters", () => {
    render(<CharacterList characters={mockCharacters} />);

    const characterElements = screen.getAllByRole("listitem");
    expect(characterElements).toHaveLength(mockCharacters.length);
  });
});
