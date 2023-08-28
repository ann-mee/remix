import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FilmCard from "../app/components/FilmCard";

jest.mock("@remix-run/react", () => {
  return {
    Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
      <a href={to}>{children}</a>
    ),
  };
});

describe("FilmCard component", () => {
  const filmData = {
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    movie_banner: "/path/to/poster.jpg",
    title: "Film Title",
    rt_score: "95%",
    synopsis: "Film synopsis",
    character: [
      { name: "Character 1", role: "Role 1" },
      { name: "Character 2", role: "Role 2" },
    ],
    release_date: "2023-07-01",
    running_time: "128",
    director: "John Doe",
    comments: [],
  };

  test("renders film card with correct data", () => {
    render(<FilmCard film={filmData} />);

    const filmTitle = screen.getByText(filmData.title);
    const rottenTomatoesRating = screen.getByText(filmData.rt_score);

    expect(filmTitle).toBeInTheDocument();
    expect(rottenTomatoesRating).toBeInTheDocument();

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe(`/films/${filmData.id}`);
  });

  test("renders film poster with correct alt text", () => {
    render(<FilmCard film={filmData} />);

    const filmPoster = screen.getByAltText(filmData.title);
    expect(filmPoster).toBeInTheDocument();
  });
});
