import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FilmData from "../app/components/FilmData";

describe("FilmData component", () => {
  const mockFilm = {
    slug: "film-slug",
    poster: "/path/to/poster.jpg",
    title: "Film Title",
    reviews: {
      rottenTomatoes: "95%",
    },
    synopsis: "Film synopsis",
    character: [{ name: "Character 1" }, { name: "Character 2" }],
    genre: "Action",
    release: "2023-07-01",
    director: "John Doe",
    runtimeMinutes: "120",
    comments: [],
  };

  test("renders film data correctly", () => {
    render(<FilmData film={mockFilm} />);

    // Check if the film data is correctly displayed in the component
    const genreRow = screen.getByText("Genre");
    const releaseRow = screen.getByText("Release");
    const directorRow = screen.getByText("Director");
    const runtimeRow = screen.getByText("Runtime");

    const genreValue = screen.getByText(mockFilm.genre);
    const releaseValue = screen.getByText(mockFilm.release);
    const directorValue = screen.getByText(mockFilm.director);
    const runtimeValue = screen.getByText(`${mockFilm.runtimeMinutes}m`);

    expect(genreRow).toBeInTheDocument();
    expect(releaseRow).toBeInTheDocument();
    expect(directorRow).toBeInTheDocument();
    expect(runtimeRow).toBeInTheDocument();

    expect(genreValue).toBeInTheDocument();
    expect(releaseValue).toBeInTheDocument();
    expect(directorValue).toBeInTheDocument();
    expect(runtimeValue).toBeInTheDocument();
  });
});
