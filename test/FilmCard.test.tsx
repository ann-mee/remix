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
    slug: "film-slug",
    poster: "/path/to/poster.jpg",
    title: "Film Title",
    reviews: {
      rottenTomatoes: "95%",
    },
    synopsis: "Film synopsis",
    character: [
      { name: "Character 1", role: "Role 1" },
      { name: "Character 2", role: "Role 2" },
    ],
    genre: "Action",
    release: "2023-07-01",
    director: "John Doe",
    runtimeMinutes: "120",
    comments: [],
  };

  test("renders film card with correct data", () => {
    render(<FilmCard film={filmData} />);

    const filmTitle = screen.getByText(filmData.title);
    const rottenTomatoesRating = screen.getByText(
      filmData.reviews.rottenTomatoes
    );

    expect(filmTitle).toBeInTheDocument();
    expect(rottenTomatoesRating).toBeInTheDocument();

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe(`/films/${filmData.slug}`);
  });

  test("renders film poster with correct alt text", () => {
    render(<FilmCard film={filmData} />);

    const filmPoster = screen.getByAltText(filmData.title);
    expect(filmPoster).toBeInTheDocument();
  });
});
