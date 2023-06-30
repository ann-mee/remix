export type Comment = {
  name: string;
  message: string;
  slug: string;
};

export async function getComments(slug: string | undefined) {
  if (!slug) return;

  const response = await fetch(`http://localhost:3001/comments?slug=${slug}`);

  return response.json();
}

export async function addComment(comment: Comment) {
  const response = await fetch("http://localhost:3001/comments", {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
