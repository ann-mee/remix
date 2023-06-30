export type Comment = {
  name: string;
  message: string;
  slug: string;
};

export async function getComments(slug: string | undefined) {
  if (!slug) return;

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_LOCAL;

  const response = await fetch(`${apiUrl}/comments?slug=${slug}`);

  return response.json();
}

export async function addComment(comment: Comment) {
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_LOCAL;

  const response = await fetch(`${apiUrl}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
