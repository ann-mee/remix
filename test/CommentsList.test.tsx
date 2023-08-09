import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CommentsList from "../app/components/CommentsList";

describe("CommentsList", () => {
  test("renders comments passed as props", () => {
    const comments = [
      { name: "User1", message: "To jest komentarz 1", slug: "slug-1" },
      { name: "User2", message: "To jest komentarz 2", slug: "slug-2" },
    ];

    render(<CommentsList comments={comments} />);

    comments.forEach((comment) => {
      expect(screen.getByText(comment.name)).toBeInTheDocument();
      expect(screen.getByText(comment.message)).toBeInTheDocument();
    });
  });

  test("renders no comments if no comments passed as props", () => {
    render(<CommentsList comments={[]} />);
    expect(screen.queryByRole("list")).toBeEmptyDOMElement();
  });
});
