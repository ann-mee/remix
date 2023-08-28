import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FilmData from "../app/components/FilmData";

describe("FilmData component", () => {
  const mockFilm = {
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    movie_banner: "/path/to/poster.jpg",
    title: "Film Title",
    rt_score: "95%",
    synopsis: "Film synopsis",
    character: [{ name: "Character 1" }, { name: "Character 2" }],
    release_date: "2023-07-01",
    director: "John Doe",
    running_time: "128",
    comments: [],
  };

  test("renders film data correctly", () => {
    render(<FilmData film={mockFilm} />);

    // Check if the film data is correctly displayed in the component
    const genreRow = screen.getByText("Genre");
    const releaseRow = screen.getByText("Release");
    const directorRow = screen.getByText("Director");
    const runtimeRow = screen.getByText("Runtime");

    const releaseValue = screen.getByText(mockFilm.release_date);
    const directorValue = screen.getByText(mockFilm.director);
    const runtimeValue = screen.getByText(`${mockFilm.running_time}m`);

    expect(genreRow).toBeInTheDocument();
    expect(releaseRow).toBeInTheDocument();
    expect(directorRow).toBeInTheDocument();
    expect(runtimeRow).toBeInTheDocument();

    expect(releaseValue).toBeInTheDocument();
    expect(directorValue).toBeInTheDocument();
    expect(runtimeValue).toBeInTheDocument();
  });
});
