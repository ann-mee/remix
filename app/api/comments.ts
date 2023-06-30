export type Comment = {
  name: string;
  message: string;
  slug: string;
};

export async function getComments(slug: string | undefined) {
  if (!slug) return;
  const apiUrl = process.env.API_URL || "http://localhost:3001";
  const response = await fetch(`${apiUrl}/comments?slug=${slug}`);

  return response.json();
}

export async function addComment(comment: Comment) {
  const apiUrl = process.env.API_URL || "http://localhost:3001";
  const response = await fetch(`${apiUrl}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
